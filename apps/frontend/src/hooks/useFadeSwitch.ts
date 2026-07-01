import { useCallback, useEffect, useRef, useState } from "react";

interface UseFadeSwitchOptions<T> {
  initialPanel: T;
  duration?: number;
}

interface UseFadeSwitchReturn<T> {
  currentPanel: T;
  isVisible: boolean;
  isTransitioning: boolean;
  changePanel: (panel: T) => void;
}

export function useFadeSwitch<T>({
  initialPanel,
  duration = 700,
}: UseFadeSwitchOptions<T>): UseFadeSwitchReturn<T> {
  const [currentPanel, setCurrentPanel] = useState<T>(initialPanel);
  const [isVisible, setIsVisible] = useState(true);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const timeoutRef = useRef<number | null>(null);

  const changePanel = useCallback(
    (panel: T) => {
      if (panel === currentPanel) return;
      if (isTransitioning) return;

      setIsTransitioning(true);

      // Fade out
      setIsVisible(false);

      timeoutRef.current = window.setTimeout(() => {
        setCurrentPanel(panel);

        requestAnimationFrame(() => {
          // Fade in
          setIsVisible(true);

          setTimeout(() => {
            setIsTransitioning(false);
          }, duration);
        });
      }, duration);
    },
    [currentPanel, duration, isTransitioning],
  );

  useEffect(() => {
    return () => {
      if (timeoutRef.current !== null) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return {
    currentPanel,
    isVisible,
    isTransitioning,
    changePanel,
  };
}

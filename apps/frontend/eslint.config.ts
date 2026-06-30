import { baseConfig, reactConfig } from "@nursinghome/eslint-config";
import { defineConfig } from "eslint/config";

export default defineConfig([...baseConfig, ...reactConfig]);

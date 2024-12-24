import globals from "globals";
import pluginJs from "@eslint/js";

/** @type {import('eslint').Linter.Config[]} */
export default [
  { ignores: ["dist/*"] },
  {languageOptions: { globals: { ...globals.browser, ...globals.jquery }}},
  pluginJs.configs.recommended,
];

// @ts-check

/** @type {import("@ianvs/prettier-plugin-sort-imports").PrettierConfig} */
const config = {
  endOfLine: "lf",
  semi: true,
  singleQuote: false,
  tabWidth: 2,
  trailingComma: "es5",
  plugins: [
    "@ianvs/prettier-plugin-sort-imports",
    "prettier-plugin-tailwindcss",
  ],
  importOrder: [
    "^@builder.io/(.*)$",
    "^(react/(.*)$)|^(react$)",
    "<THIRD_PARTY_MODULES>",
    "",
    "^types$",
    "^~/types/(.*)$",
    "^~/store/?(.*)$",
    "^~/config/(.*)$",
    "^~/lib/(.*)$",
    "^~/hooks/?(.*)$",
    "^~/components/(.*)$",
    "^~/styles/(.*)$",
    "",
    "^~/public/(.*)$",
    "^[./]",
  ],
  importOrderParserPlugins: ["typescript", "jsx", "decorators-legacy"],
};

export default config;

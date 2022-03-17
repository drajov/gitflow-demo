import * as i18n from "i18n";
import * as path from "path";

i18n.configure({
  autoReload: true,
  defaultLocale: "en",
  directory: path.join(path.resolve(), "src/locales"),
  locales: ["en"],
  objectNotation: true,
  register: global,
});

export { i18n };

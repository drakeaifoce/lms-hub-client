const { configure, presets } = require("eslint-kit");

module.exports = {
  extends: "next/core-web-vitals",
};

module.exports = configure({
  presets: [
    presets.node(),
    presets.react(),
    presets.nextJs(),
    presets.prettier(),
    presets.imports(),
  ],
});

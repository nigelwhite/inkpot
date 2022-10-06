// npx mix watch
// npx mix --production

let mix = require("laravel-mix");

// REPLACE THE THEME NAME
// var themename = "b5subtheme";
// const themePath = "web/themes/custom/" + themename + "";
// Source files eg uncompiled js & scss will be in the theme under /src folder
// within src folder there will be /js/ and /scss/ folder
// const resources = themePath + "/scss";

// Public path is where the files will be created
// assets/css/app.css
// assets/js/app.js
// mix.setPublicPath(`${themePath}/css`);
mix.sass("scss/style.scss", "css/");
// mix.sass(`${resources}/style.scss`, `${themePath}/css`).sourceMaps();
// mix.js(`${resources}/js/app.js`, `${themePath}/assets/js`);
// Uncomment for browser sync
// mix.browserSync("http://inkpot-drupal.ddev.site:877");

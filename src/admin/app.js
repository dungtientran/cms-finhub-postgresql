// @ts-ignore
import logo from './extensions/logo.jpg';
// @ts-ignore
import favicon from './extensions/favicon.png';

const config = {

  auth: {
    logo: logo,
  },
  head: {
    favicon: favicon,
  },
  menu: {
    logo: favicon,
  },
  translations: {
    en: {

      category: 'Category management',
      layout: 'Theme management',
      customer: 'Customer management',
      "Auth.form.welcome.title": "Finhub Admin",
      "Auth.form.welcome.subtitle": "Log in to your account",

      "app.components.LeftMenu.navbrand.title": "Finhub Dashboard",
      "app.components.LeftMenu.navbrand.workplace": "Workplace",
      "Media Library": "Hehheeh",

      "content-manager.containers.ListPage.table-headers.category_name": 'Categories',

      'content-manager.containers.ListPage.table-headers.theme_name': 'Name theme',
      "Content Manager": "LA LA LA",
    },
  },
  locales: [
    // 'ar',
    // 'fr',
    // 'cs',
    // 'de',
    // 'dk',
    // 'es',
    // 'he',
    // 'id',
    // 'it',
    // 'ja',
    // 'ko',
    // 'ms',
    // 'nl',
    // 'no',
    // 'pl',
    // 'pt-BR',
    // 'pt',
    // 'ru',
    // 'sk',
    // 'sv',
    // 'th',
    // 'tr',
    // 'uk',
    // 'vi',
    // 'zh-Hans',
    // 'zh',
  ],
};

const bootstrap = (app) => {
  console.log(app);
};

export default {
  config,
  bootstrap,
};

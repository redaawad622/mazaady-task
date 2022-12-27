// plugins/vuetify.js
import { createVuetify, ThemeDefinition } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';
const myCustomLightTheme: ThemeDefinition = {
  dark: false,
  colors: {
    background: '#FFFFFF',
    surface: '#FFFFFF',
    primary: '#D20653',
    'primary-lighten-5': '#fae6ed',
    secondary: '#03DAC6',
    'secondary-darken-1': '#018786',
    error: '#B00020',
    info: '#2196F3',
    success: '#4CAF50',
    warning: '#FB8C00',
    usedC1: '#44215D',
    usedC2: '#EAE6ED',
    usedC3: '#FFF8E5',
    'usedC3-darken-2': '#FDBC01',
  },
};

export default defineNuxtPlugin((nuxtApp) => {
  const vuetify = createVuetify({
    components,
    directives,
    locale: {
      locale: 'en',
      rtl: {
        en: true,
      },
    },
    theme: {
      defaultTheme: 'myCustomLightTheme',
      themes: {
        myCustomLightTheme,
      },
    },
  });

  nuxtApp.vueApp.use(vuetify);
});

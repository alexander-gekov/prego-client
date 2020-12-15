import Vue from 'vue';
import VueI18n from 'vue-i18n';
Vue.use(VueI18n);

const messages = {    'en': {logintitle: 'Log in', welcomeMsg: 'ENGl'}, 
   'nl': {logintitle: 'Inloggen', welcomeMsg: 'Dutch'}};

const i18n = new VueI18n({    locale: 'en', // set locale
    fallbackLocale: 'nl', // set fallback locale    
    messages, // set locale messages
});

export default i18n;
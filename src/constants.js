import ENVS from './envs.js';

export const API_URL = ENVS.API_URL;
export const APP_URL = ENVS.APP_URL;

export const APP_TITLE = 'Fun Media';

export const AUTH_CONFIG = {
  domain: 'fun-media.eu.auth0.com',
  clientId: 'QBWcJ27DHOVlQzadD_4P4JQ2eAI3OE4M',
  apiUrl: API_URL
};

export const LOCK_OPTIONS = {
  allowSignUp: false,
  auth: {
    redirectUrl: `${APP_URL}/callback`,
    responseType: 'token id_token',
    scope: 'openid',
    params: {
      scope: 'openid profile',
      audience: API_URL
    }
  },
  container: 'lock-container',
  socialButtonStyle: 'small',
  theme: {
    logo: 'https://avatars1.githubusercontent.com/u/13014504?v=3&s=200',
    primaryColor: '#31324F'
  },
  language: 'ru',
  languageDictionary: {
    title: APP_TITLE
  }
};
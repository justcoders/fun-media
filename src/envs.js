let ENVS = {};

if (process.env.NODE_ENV !== 'development') {
  ENVS.API_URL = 'http://fun-media-api.justcoders.org/api';
  ENVS.APP_URL = 'http://fun.justcoders.org';
} else {
  ENVS.API_URL = 'http://localhost:3777/api';
  ENVS.APP_URL = 'http://localhost:3777/api';
}

export default ENVS;
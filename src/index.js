import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './styles/index.css';
import injectTapEventPlugin from 'react-tap-event-plugin';

import { makeMainRoutes } from './routes';
const routes = makeMainRoutes();

injectTapEventPlugin();

ReactDOM.render(
  routes,
  document.getElementById('root')
);

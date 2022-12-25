import './styles/style.scss';
import { App } from './js/application/app';
import { State } from './js/common/state';

const state = new State([]);
const app = new App(document.body, state);

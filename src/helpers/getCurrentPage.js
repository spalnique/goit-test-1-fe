import { perPage } from '../redux/constants.js';

export const getCurrentPage = (data) =>
  data.length ? Math.ceil(data.length / perPage) : 1;

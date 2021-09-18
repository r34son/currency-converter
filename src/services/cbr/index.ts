import axios from 'axios';
import { Daily } from './models';

const cbr = axios.create({
  baseURL: 'https://www.cbr-xml-daily.ru/',
  timeout: 1000,
});

export const fetchDaily = () => cbr.get<Daily>('daily_json.js');

export default cbr;

import Converter from './components/Converter';
import CurrencyList from './components/CurrencyList';

export type TRoute = { label: string; value: number, Component: () => JSX.Element };

export const routes: Record<string, TRoute> = {
  '/currency-list': { label: 'Список валют', value: 0, Component: CurrencyList },
  '/converter': { label: 'Конвертер', value: 1, Component: Converter },
};

export const defaultPath = Object.keys(routes)[0];

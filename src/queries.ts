import { useQuery } from 'react-query';
import { fetchDaily } from './services/cbr';

export const useDaily = () => useQuery('daily', fetchDaily);

import { useCallback, useMemo, useState } from 'react';
import { useQueryClient } from 'react-query';
import { Pagination, Stack, Grid, GridSize } from '@mui/material';
import { Daily } from '../services/cbr/models';
import ValuteCard from './ValuteCard';

const cardsInRow = 3;
const rows = 4;
const pageSize = rows * cardsInRow;

const CurrencyList = () => {
  const [page, setPage] = useState(1);
  const handleChange = useCallback((_: unknown, value: number) => setPage(value), []);
  const queryClient = useQueryClient();
  const daily = queryClient.getQueryData<Daily>('daily');
  const valutes = useMemo(() => Object.values(daily?.Valute || {}), [daily?.Valute]);

  return (
    <Stack spacing={2}>
      <Grid container spacing={2}>
        {valutes
          .slice((page - 1) * pageSize, page * pageSize)
          .map((valute) => (
            <Grid key={valute.ID} item xs={(12 / cardsInRow) as GridSize}>
              <ValuteCard valute={valute} />
            </Grid>
          ))}
      </Grid>
      <Pagination
        sx={{ display: 'flex', justifyContent: 'center' }}
        variant="outlined"
        count={Math.ceil(valutes.length / pageSize)}
        page={page}
        onChange={handleChange}
      />
    </Stack>
  );
};

export default CurrencyList;

import { Card, CardContent, Typography, IconButton, Box } from '@mui/material';
import SwapHorizRoundedIcon from '@mui/icons-material/SwapHorizRounded';
import { Valute } from '../services/cbr/models';
import Diff from './Diff';

interface Props {
  valute: Valute;
}

const ValuteCard = ({ valute: { Nominal, Name, CharCode, Value, Previous } }: Props) => (
  <Card elevation={3}>
    <CardContent>
      <Typography color="text.secondary" noWrap gutterBottom>
        {Name}
      </Typography>
      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Box>
          {Nominal} {CharCode}
          <IconButton size="small"><SwapHorizRoundedIcon /></IconButton>
          {Value} RUB
        </Box>
        <Diff value={Value - Previous} />
      </Box>
    </CardContent>
  </Card>
);

export default ValuteCard;

import ArrowUpwardRoundedIcon from '@mui/icons-material/ArrowUpwardRounded';
import ArrowDownwardRoundedIcon from '@mui/icons-material/ArrowDownwardRounded';
import { Box } from '@mui/material';

const Diff = ({ value }: { value: number }) => {
  const Arrow = value > 0 ? ArrowUpwardRoundedIcon : ArrowDownwardRoundedIcon;
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', color: value > 0 ? 'green' : 'red' }}>
      <Arrow />{Math.abs(value).toFixed(4)}
    </Box>
  );
};

export default Diff;

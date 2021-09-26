import { Box } from '@mui/material';
import { FC } from 'react';

interface Props {
  value: number;
  index: number;
}

const TabPanel: FC<Props> = ({ children, value, index, ...other }) => (
  <div
    role="tabpanel"
    hidden={value !== index}
    {...other}
  >
    {value === index && (
    <Box sx={{ p: 3 }}>
      {children}
    </Box>
    )}
  </div>
);

export default TabPanel;

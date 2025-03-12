import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';

export const BackgroundContainer = styled(Box)(({ backgroundImage }) => ({
  position: 'fixed',
  height: 533,
  top: 300,
  left: '50%',
  transform: 'translateX(-50%)',
  backgroundColor: '#000000',
  backgroundImage: `url(${backgroundImage})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  opacity: 0.63,
  zIndex: -1,
  width: '100%',
  minWidth: '100vw'
}));
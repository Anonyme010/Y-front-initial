import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';

export const MainContainer = styled(Box)(({ theme, isDarkMode }) => ({
  minHeight: '100vh',
  width: '100%',
  backgroundColor: isDarkMode ? '#121212' : theme.palette.grey[50],
  transition: 'background-color 0.3s ease',
  overflowX: 'hidden',
  position: 'relative',
  margin: 0,
  padding: 0,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center'
}));

export const GridLayout = styled(Box)(({ theme }) => ({
  display: 'grid',  
  gridTemplateColumns: '1fr',
  width: '100%',
  maxWidth: '1032px',
  margin: '0 auto',
  paddingTop: '70px',
  position: 'relative',
  zIndex: 1,
  gap: theme.spacing(2),
  height: 'calc(100vh - 70px)', 

  [theme.breakpoints.up('md')]: {
    gridTemplateColumns: '211px minmax(610px, 1fr)',
    gap: theme.spacing(3)
  },

  [theme.breakpoints.up('lg')]: {
    gridTemplateColumns: '211px 610px 211px',
    gap: theme.spacing(4)
  }
}));

export const LeftSidebar = styled(Box)(({ theme }) => ({
  display: 'none',
  [theme.breakpoints.up('md')]: {
    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing(2),
    position: 'sticky',
    top: '70px',
    height: 'calc(100vh - 70px)',
    overflowX: 'hidden',
    overflowY: 'auto',
    width: '211px',
    minWidth: '211px',
    '& > *': {
      flexShrink: 0
    },
    // Hide scrollbar
    msOverflowStyle: 'none',
    scrollbarWidth: 'none', 
    '&::-webkit-scrollbar': { 
      display: 'none'
    }
  }
}));

export const MainContent = styled(Box)({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  overflowY: 'auto',
  maxHeight: 'calc(100vh - 70px)',
  padding: '0 16px',
  // Hide scrollbar
  msOverflowStyle: 'none',
  scrollbarWidth: 'none',
  '&::-webkit-scrollbar': {
    display: 'none'
  }
});

export const RightSidebar = styled(Box)(({ theme }) => ({
  display: 'none',
  [theme.breakpoints.up('lg')]: {
    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing(2),
    position: 'sticky',
    top: '70px',
    height: 'fit-content',
    maxHeight: 'calc(100vh - 70px)',
    overflowY: 'auto',
    // Hide scrollbar
    msOverflowStyle: 'none',
    scrollbarWidth: 'none',
    '&::-webkit-scrollbar': {
      display: 'none'
    }
  }
}));
import { styled } from '@mui/material/styles';
import { Box, Button, Stack, Menu, MenuItem } from '@mui/material';

export const PageContainer = styled(Box)( {
  position: 'relative',
  zIndex: 1,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: '100%',
  maxWidth: '610px',
  margin: '0 auto',
  paddingBottom: '20px'
});

export const SortContainer = styled(Box)( {
  width: '100%', 
  display: 'flex', 
  justifyContent: 'flex-start',
  padding: '8px 0',
  position: 'sticky',
  top: 0,
  zIndex: 2,
  '&:after': {
    content: '""',
    position: 'absolute',
    bottom: '-15px',
    left: 0,
    right: 0,
    height: '15px',
    background: 'linear-gradient(180deg, var(--gradient-color) 0%, transparent 100%)',
    pointerEvents: 'none',
    zIndex: 1
  }
});

export const SortButton = styled(Button)(({ theme, isDarkMode }) => ( {
  color: isDarkMode ? '#FFFFFF' : theme.palette.text.secondary,
  textTransform: 'none',
  backgroundColor: isDarkMode ? '#121212' : '#FFFFFF',
  padding: '4px 12px',
  minHeight: '32px',
  '&:hover': { 
    backgroundColor: isDarkMode ? '#1a1a1a' : '#f5f5f5'
  }
}));

export const PostsStack = styled(Stack)( {
  width: '100%',
  alignItems: 'center',
  position: 'relative',
  marginTop: '8px'
});

export const SortMenu = styled(Menu)(({ theme }) => ( {
  '& .MuiPaper-root': {
    marginTop: '4px',
    minWidth: 120,
    borderRadius: '8px',
    backgroundColor: '#FFFFFF',
    boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
  },
  '& .MuiMenu-list': {
    padding: '8px 0',
  }
}));

export const SortMenuItem = styled(MenuItem)(({ theme, selected }) => ( {
  padding: '8px 16px',
  fontFamily: 'Montserrat',
  fontSize: '14px',
  color: selected ? '#B2FD27' : '#000000',
  backgroundColor: 'transparent',
  '&:hover': {
    backgroundColor: '#F5F5F5'
  },
  '&.Mui-selected': {
    backgroundColor: 'transparent',
    '&:hover': {
      backgroundColor: '#F5F5F5'
    }
  }
}));
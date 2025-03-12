import { styled } from '@mui/material/styles';
import { Box, Typography, AppBar, Avatar, IconButton, InputBase, Container, Toolbar, Menu, MenuItem } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

export const StyledAppBar = styled(AppBar)({
  width: '100%',
  height: '56px',
  top: 0,
  backgroundColor: 'white',
  boxShadow: 'none',
  position: 'fixed',
  display: 'flex',
  alignItems: 'center'
});

export const StyledContainer = styled(Container)({
  maxWidth: '1032px !important',
  padding: '0 16px !important',
  margin: '0 auto',
  position: 'relative',
  width: '100%'
});

export const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  minHeight: '68px !important',
  padding: 0,
  position: 'relative',
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  gap: '12px',
  justifyContent: 'space-between',
}));

export const LogoText = styled(Typography)(({ theme }) => ({
  fontFamily: 'Joti One',
  fontWeight: 400,
  fontSize: '55px',
  lineHeight: '100%',
  color: '#000000',
  [theme.breakpoints.down('sm')]: {
    fontSize: '40px',
  }
}));

export const Search = styled('div')(({ theme }) => ({
  width: '192px',
  height: '28px',
  backgroundColor: '#F2F2F2',
  borderRadius: '14px',
  display: 'flex',
  alignItems: 'center',
  position: 'relative',
  [theme.breakpoints.down('sm')]: {
    width: '140px'
  }
}));

export const SearchIconWrapper = styled('div')({
  width: '22px',
  height: '22px',
  position: 'absolute',
  left: '7px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  '& .MuiSvgIcon-root': {
    width: '16px',
    height: '16px',
    color: '#CCCCCE'
  }
});

export const StyledInputBase = styled(InputBase)( {
  width: '100%',
  height: '20px',
  paddingLeft: '40px',
  '& .MuiInputBase-input': {
    fontFamily: 'Montserrat',
    fontWeight: 400,
    fontSize: '16px',
    color: '#CCCCCE',
    '&::placeholder': {
      color: '#CCCCCE',
      opacity: 1
    }
  }
});

export const AuthSection = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
  '& .MuiButton-root': {
    fontFamily: 'Montserrat',
    fontWeight: 600,
    fontSize: '16px',
    color: '#000000',
    textTransform: 'none',
    padding: '4px 8px'
  },
  '& .MuiTypography-root': {
    color: '#000000'
  },
  [theme.breakpoints.down('md')]: {
    display: 'none'
  }
}));

export const ProfileSection = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: '12px',
  [theme.breakpoints.down('sm')]: {
    '& .MuiTypography-root': {
      display: 'none'
    }
  }
}));

export const ProfilePic = styled(Avatar)( {
  width: '44px',
  height: '44px',
  borderRadius: '22px',
  border: '4px solid #B2FD27'
});

export const Username = styled(Typography)( {
  fontFamily: 'Joti One',
  fontWeight: 400,
  fontSize: '16px',
  lineHeight: '100%',
  color: '#000000'
});

export const StyledChevron = styled(KeyboardArrowDownIcon)(({ theme }) => ( {
  width: '16px',
  height: '16px',
  color: '#000000',
  [theme.breakpoints.down('sm')]: {
    display: 'none'
  }
}));

export const DarkModeButton = styled(IconButton)(({ theme }) => ( {
  color: '#000000',
  [theme.breakpoints.down('md')]: {
    display: 'none'
  }
}));

export const StyledMenu = styled(Menu)(({ theme }) => ({
  '& .MuiPaper-root': {
    marginTop: '4px',
    minWidth: 180,
    borderRadius: '8px',
    backgroundColor: '#FFFFFF',
    boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
  },
  '& .MuiMenu-list': {
    padding: '8px 0',
  },
}));

export const StyledMenuItem = styled(MenuItem)(({ theme }) => ({
  padding: '8px 16px',
  fontFamily: 'Montserrat',
  fontSize: '14px',
  color: '#000000',
  '&:hover': {
    backgroundColor: '#F5F5F5'
  }
}));
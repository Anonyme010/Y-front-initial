import { styled } from '@mui/material/styles';
import { Box, Button } from '@mui/material';

// Container
export const NavContainer = styled(Box)({
  width: '211px',
  minWidth: '211px',
  backgroundColor: '#FFFFFF',
  borderTopRightRadius: '24px',
  borderBottomRightRadius: '24px',
  padding: '23px 21px',
  display: 'flex',
  flexDirection: 'column',
  gap: '23px',
  overflowX: 'hidden',
  overflowY: 'auto',
  msOverflowStyle: 'none',
  scrollbarWidth: 'none',
  '&::-webkit-scrollbar': {
    display: 'none'
  }
});

// Base NavItem style
const NavItem = styled(Box)(({ active }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: '13px',
  cursor: 'pointer',
  width: '100%',
  minWidth: 0,
  '& .MuiSvgIcon-root': {
    width: '22px',
    height: '22px',
    flexShrink: 0,
    color: active ? '#B2FD27' : '#000000',
  },
  '& .MuiTypography-root': {
    color: active ? '#B2FD27' : '#000000',
    fontFamily: 'Montserrat',
    fontWeight: 400,
    fontSize: '16px',
    lineHeight: '100%',
    letterSpacing: '0%',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis'
  }
}));

// Nav item exports
export const HomeItem = styled(NavItem)({});
export const ProfileItem = styled(NavItem)({});
export const NotificationsItem = styled(NavItem)({});
export const SavedItem = styled(NavItem)({});
export const InteractionsItem = styled(NavItem)({});

// Button
export const CreatePostButton = styled(Button)({
  width: '100%',
  maxWidth: '171px',
  height: '40px',
  borderRadius: '20px',
  backgroundColor: '#B2FD27',
  marginTop: '12px',
  padding: '0 16px',
  '&:hover': {
    backgroundColor: '#a1e923'
  },
  '& .MuiTypography-root': {
    fontFamily: 'Joti One',
    fontWeight: 400,
    fontSize: '14px',
    lineHeight: '100%',
    letterSpacing: '0%',
    color: '#000000',
    whiteSpace: 'nowrap'
  }
});
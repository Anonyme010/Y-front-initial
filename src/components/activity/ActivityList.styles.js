import { styled } from '@mui/material/styles';
import { Box, Paper, Typography, Avatar, Button, Link } from '@mui/material';

export const ActivityContainer = styled(Paper)({
  width: '211px',
  height: 256,
  backgroundColor: '#FFFFFF',
  borderWidth: 1,
  borderStyle: 'solid',
  borderColor: '#E0E0E0',
  borderLeft: '4px solid #B2FD27',
  borderRadius: 0,
  padding: '20px'
});

export const ActivityHeader = styled(Box)({ 
  width: '100%',
  height: 20,
  display: 'flex', 
  alignItems: 'center', 
  justifyContent: 'space-between'
});

export const HeaderTitle = styled(Typography)({
  fontFamily: 'Montserrat',
  fontWeight: 600,
  fontSize: '16px',
  lineHeight: '100%',
  color: '#000000'
});

export const ViewAllLink = styled(Link)({ 
  fontFamily: 'Montserrat',
  fontWeight: 400,
  fontSize: '10px',
  lineHeight: '100%',
  color: '#000000'
});

export const Divider = styled(Box)({ 
  width: '100%', 
  height: '1px', 
  backgroundColor: '#D9D9D9',
  margin: '16px 0'
});

export const ActivityItemContainer = styled(Box)({ 
  display: 'flex', 
  alignItems: 'flex-start',
  gap: '8px',
  marginBottom: 16
});

export const ActivityAvatar = styled(Avatar)({ 
  width: 35, 
  height: 35, 
  borderRadius: '17.5px'
});

export const ActivityContent = styled(Box)({
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  gap: '4px'
});

export const Username = styled(Typography)({
  fontFamily: 'Joti One',
  fontWeight: 400,
  fontSize: '10px',
  lineHeight: '100%',
  color: '#000000',
});

export const ActionText = styled(Typography)({
  fontFamily: 'Montserrat',
  fontWeight: 400,
  fontSize: '10px',
  lineHeight: '100%',
  color: '#000000'
});

export const FollowButtonContainer = styled(Box)({
  width: 41,
  height: 21
});

export const StyledFollowButton = styled(Button)({
  width: '100%',
  height: '100%',
  borderRadius: '10.5px',
  backgroundColor: '#000000',
  '&:hover': { backgroundColor: '#000000' },
  textTransform: 'none',
  fontFamily: 'Montserrat',
  fontWeight: 600,
  fontSize: '10px',
  lineHeight: '100%',
  color: '#FFFFFF',
  minWidth: 'unset',
  padding: '0px'
});

export const ActivityImage = styled('img')({
  width: 35,
  height: 35,
  borderRadius: 1,
  objectFit: 'cover'
});
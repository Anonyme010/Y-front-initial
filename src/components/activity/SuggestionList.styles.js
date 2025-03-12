import { styled } from '@mui/material/styles';
import { Box, Paper, Typography, Avatar, Button, Link } from '@mui/material';

export const SuggestionContainer = styled(Paper)({
  width: '211px',
  height: '176px',
  backgroundColor: '#FFFFFF',
  borderWidth: 1,
  borderStyle: 'solid',
  borderColor: '#E0E0E0',
  borderLeft: '4px solid #B2FD27',
  borderRadius: 0,
  padding: '20px'
});

export const SuggestionHeader = styled(Box)({ 
  width: '100%',
  height: 20,
  display: 'flex', 
  alignItems: 'center', 
  justifyContent: 'space-between',
  marginBottom: 16
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
  marginBottom: 16
});

export const SuggestionItemContainer = styled(Box)({ 
  display: 'flex', 
  alignItems: 'center',
  gap: '7px',
  marginBottom: 8,
  position: 'relative'
});

export const SuggestionAvatar = styled(Avatar)({ 
  width: 35, 
  height: 35, 
  borderRadius: '17.5px'
});

export const Username = styled(Typography)({
  fontFamily: 'Joti One',
  fontWeight: 400,
  fontSize: '10px',
  lineHeight: '100%',
  color: '#000000'
});

export const FollowButtonContainer = styled(Box)({
  marginLeft: 'auto'
});

export const StyledFollowButton = styled(Button)({
  width: '41px',
  height: '21px',
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
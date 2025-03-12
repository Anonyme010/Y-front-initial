import { styled } from '@mui/material/styles';
import { Box, Paper, Button, InputBase, IconButton, Avatar } from '@mui/material';

export const PostContainer = styled(Paper)( {
  width: '100%',
  maxWidth: '610px',
  minHeight: '123px',
  backgroundColor: '#FFFFFF',
  borderRadius: '16px',
  padding: '12px',
  margin: '0 auto'
});

export const ContentWrapper = styled(Box)( {
  display: 'flex',
  gap: '12px'
});

export const StyledAvatar = styled(Avatar)( {
  width: '64px',
  height: '64px',
  borderRadius: '32px',
  border: '4px solid #FFFFFF',
  flexShrink: 0
});

export const MainContent = styled(Box)( {
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  gap: '12px'
});

export const InputWrapper = styled(Box)( {
  width: '100%',
  minHeight: '51px',
  borderRadius: '25.5px',
  backgroundColor: '#F2F2F2',
  display: 'flex',
  alignItems: 'center',
  padding: '0 16px',
  gap: '8px'
});

export const StyledInput = styled(InputBase)( {
  flex: 1,
  fontFamily: 'Montserrat',
  fontWeight: 400,
  fontSize: '16px',
  lineHeight: '100%',
  color: '#CCCCCE',
  '&::placeholder': {
    color: '#CCCCCE'
  }
});

export const EmojiWrapper = styled(IconButton)( {
  width: '24px',
  height: '24px',
  '& .MuiSvgIcon-root': {
    width: 20,
    height: 20,
    color: '#B1B1B1'
  }
});

export const EmojiPickerWrapper = styled(Box)({
  position: 'fixed',
  zIndex: 3,
  backgroundColor: '#fff',
  boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.15)',
  borderRadius: '8px'
});

export const ActionsWrapper = styled(Box)( {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between'
});

export const ActionGroup = styled(Box)( {
  display: 'flex',
  alignItems: 'center',
  gap: '36px'
});

export const IconTextGroup = styled(Box)( {
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
  cursor: 'pointer'
});

export const IconWrapper = styled(Box)( {
  '& .MuiSvgIcon-root': {
    width: '18.33px',
    height: '18.33px',
    color: '#000000'
  }
});

export const ActionText = styled(Box)( {
  fontFamily: 'Montserrat',
  fontWeight: 400,
  fontSize: '16px',
  lineHeight: '100%',
  color: '#000000'
});

export const PublishButton = styled(Button)( {
  width: '76px',
  height: '32px',
  borderRadius: '16px',
  backgroundColor: '#B2FD27',
  '&:hover': {
    backgroundColor: '#a1e923'
  },
  fontFamily: 'Montserrat',
  fontWeight: 600,
  fontSize: '14px',
  lineHeight: '100%',
  color: '#000000',
  textTransform: 'none'
});
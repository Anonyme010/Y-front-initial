import { styled } from '@mui/material/styles';
import { Box, Card, Avatar, Typography, IconButton, Paper } from '@mui/material';
// Container
export const PostContainer = styled(Card)({
  width: '100%',
  maxWidth: 609,
  minHeight: 380,
  backgroundColor: '#FFFFFF',
  borderRadius: '16px',
  margin: '20px auto',
  padding: '20px',
  display: 'flex',
  flexDirection: 'column'
});

export const HeaderContainer = styled(Box)( {
  display: 'flex',
  alignItems: 'flex-start',
  marginBottom: '16px',
  gap: '16px',
  width: '100%'
});
export const ProfileAvatar = styled(Avatar)( {
  width: 40,
  height: 40,
  borderRadius: '25px',
  flexShrink: 0
});
export const UserInfoContainer = styled(Box)( {
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  gap: '4px'
});
export const Username = styled(Typography)( {
  fontFamily: 'Joti One',
  fontWeight: 400,
  fontSize: '16px',
  lineHeight: '100%',
  color: '#000000'
});
export const UserHandle = styled(Typography)( {
  fontFamily: 'Montserrat',
  fontWeight: 400,
  fontSize: '8px',
  lineHeight: '100%',
  color: '#0B0E13'
});
export const TimeStamp = styled(Typography)( {
  fontFamily: 'Montserrat',
  fontWeight: 400,
  fontSize: '8px',
  lineHeight: '100%',
  color: '#0B0E13'
});
export const MoreButton = styled(IconButton)( {
  padding: 0,
  '& .MuiSvgIcon-root': {
    width: '18.33px',
    height: '18.5px',
    color: '#000000'
  }
});
// Content section
export const ContentSection = styled(Box)({
  width: '100%'
});
export const MainContent = styled(Box)({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  gap: '12px'
});
export const ContentText = styled(Typography)({
  fontFamily: 'Montserrat',
  fontWeight: 400,
  fontSize: '14px',
  lineHeight: '150%',
  color: '#000000'
});
export const HashtagText = styled(Typography)({
  fontFamily: 'Montserrat',
  fontWeight: 400,
  fontSize: '14px',
  lineHeight: '150%',
  color: '#1DA1F2',
  '& span': {
    marginLeft: '4px'
  }
});
export const ImageContainer = styled(Box)({
  width: '100%',
  height: '300px',
  borderRadius: '8px',
  overflow: 'hidden',
  '& img': {
    width: '100%',
    height: '100%',
    objectFit: 'cover'
  }
});
// Comment sections
export const CommentsSection = styled(Box)( {
  marginTop: '16px'
});
export const CommentsHeader = styled(Typography)( {
  fontFamily: 'Montserrat',
  fontWeight: 600,
  fontSize: '16px',
  lineHeight: '100%',
  color: '#000000'
});
export const CommentDivider = styled(Box)( {
  width: '100%',
  height: '1px',
  backgroundColor: '#E0E0E0',
  margin: '16px 0'
});
// Comment items
export const CommentItem = styled(Box)( {
  display: 'flex',
  alignItems: 'flex-start',
  gap: '8px',
  marginTop: '16px'
});
export const CommentAvatar = styled(Avatar)( {
  width: 20,
  height: 20,
  flexShrink: 0
});
export const CommentContent = styled(Box)( {
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  gap: '4px'
});
export const CommentUsername = styled(Typography)({
  fontFamily: 'Joti One',
  fontWeight: 400,
  fontSize: '10px',
  lineHeight: '100%',
  color: '#000000'
});

export const CommentText = styled(Typography)({
  fontFamily: 'Montserrat',
  fontWeight: 400,
  fontSize: '10px',
  lineHeight: '100%',
  color: '#000000'
});

export const CommentTime = styled(Typography)({
  fontFamily: 'Montserrat',
  fontWeight: 400,
  fontSize: '8px',
  lineHeight: '100%',
  color: '#666666',
  alignSelf: 'flex-end'
});

export const ShowMoreText = styled(Typography)({
  fontFamily: 'Montserrat',
  fontWeight: 400,
  fontSize: '8px',
  lineHeight: '100%',
  color: '#000000',
  marginTop: '16px',
  textAlign: 'right'
});
// Action section
export const ActionSection = styled(Box)( {
  display: 'flex',
  alignItems: 'center',
  gap: '24px',
  padding: '16px 0',
  borderTop: '1px solid #E0E0E0',
  borderBottom: '1px solid #E0E0E0',
  margin: '16px 0'
});
export const ActionItem = styled(Box)( {
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
  color: '#000000',
  cursor: 'pointer',
  '& .MuiSvgIcon-root': {
    width: '20px',
    height: '20px'
  }
});
// Comment input section
export const CommentInputSection = styled(Box)( {
  display: 'flex',
  alignItems: 'center',
  gap: '12px',
  marginTop: 'auto'
});
export const CommentInputAvatar = styled(Avatar)( {
  width: 35,
  height: 35,
  flexShrink: 0
});
export const CommentInputWrapper = styled(Box)( {
  flex: 1,
  height: 35,
  borderRadius: '17.5px',
  backgroundColor: '#F2F2F2',
  display: 'flex',
  alignItems: 'center',
  padding: '0 16px',
  gap: '8px'
});
export const CommentInput = styled('input')( {
  flex: 1,
  border: 'none',
  backgroundColor: 'transparent',
  outline: 'none',
  fontFamily: 'Inter',
  fontSize: '16px',
  color: '#CCCCCE',
  '&::placeholder': {
    color: '#CCCCCE'
  }
});
export const SendButton = styled(IconButton)( {
  width: 38,
  height: 29,
  backgroundColor: '#0B0E13',
  borderRadius: '4px',
  padding: 0,
  minWidth: 'unset',
  '&:hover': {
    backgroundColor: '#1a1a1a'
  },
  '& .MuiSvgIcon-root': {
    width: '19.25px',
    height: '16.5px',
    color: '#FFFFFF'
  }
});
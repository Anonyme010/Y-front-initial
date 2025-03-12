import { styled } from '@mui/material/styles';
import { Box, Typography, Avatar } from '@mui/material';

export const ProfileContainer = styled(Box)({
  width: '211px',
  backgroundColor: '#FEFDFF',
  borderBottom: '4px solid #B2FD27',
  padding: '20px',
  display: 'flex',
  flexDirection: 'column',
  gap: '16px'
});

export const ProfileHeader = styled(Box)({
  display: 'flex',
  alignItems: 'flex-start',
  gap: '12px'
});

export const ProfilePicture = styled(Avatar)({
  width: '42px',
  height: '42px',
  borderRadius: '21px',
  border: '2px solid #FFFFFF',
  flexShrink: 0
});

export const UserInfo = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  gap: '4px'
});

export const Username = styled(Typography)({
  fontFamily: 'Joti One',
  fontWeight: 400,
  fontSize: '16px',
  lineHeight: '100%',
  color: '#000000'
});

export const Handle = styled(Typography)({
  fontFamily: 'Montserrat',
  fontWeight: 400,
  fontSize: '8px',
  lineHeight: '100%',
  color: '#000000'
});

export const StatsContainer = styled(Box)({
  display: 'flex',
  justifyContent: 'space-between',
  padding: '12px 0'
});

const StatBox = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '4px'
});

export const StatValue = styled(Typography)({
  fontFamily: 'Montserrat',
  fontWeight: 600,
  fontSize: '10px',
  lineHeight: '100%',
  color: '#000000'
});

export const StatLabel = styled(Typography)({
  fontFamily: 'Montserrat',
  fontWeight: 400,
  fontSize: '10px',
  lineHeight: '100%',
  color: '#000000'
});

export const PostsStats = styled(StatBox)({});
export const FollowersStats = styled(StatBox)({});
export const FollowingStats = styled(StatBox)({});

export const TagsContainer = styled(Box)({
  width: '211px',
  backgroundColor: '#FFFFFF',
  borderRight: '4px solid #B2FD27',
  padding: '20px',
  marginTop: '10px',
  display: 'flex',
  flexDirection: 'column',
  gap: '16px'
});

export const TagsHeader = styled(Box)({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center'
});

export const TagsTitle = styled(Typography)({
  fontFamily: 'Montserrat',
  fontWeight: 600,
  fontSize: '16px',
  lineHeight: '100%',
  color: '#000000'
});

export const AddText = styled(Typography)({
  fontFamily: 'Montserrat',
  fontWeight: 400,
  fontSize: '10px',
  lineHeight: '100%',
  color: '#000000'
});

export const IconWrapper = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer',
  '& .MuiSvgIcon-root': {
    width: '14px',
    height: '14px',
    color: '#000000'
  }
});

export const Divider = styled(Box)({
  width: '100%',
  height: '1px',
  backgroundColor: '#D9D9D9'
});

export const TagItem = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  gap: '8px'
});

export const TagImage = styled(Avatar)({
  width: '35px',
  height: '35px',
  borderRadius: '17.5px',
  flexShrink: 0
});

export const TagInfo = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  gap: '4px'
});

export const TagName = styled(Typography)({
  fontFamily: 'Montserrat',
  fontWeight: 600,
  fontSize: '12px',
  lineHeight: '100%',
  color: '#000000'
});

export const PostCount = styled(Typography)({
  fontFamily: 'Montserrat',
  fontWeight: 400,
  fontSize: '10px',
  lineHeight: '100%',
  color: '#000000'
});
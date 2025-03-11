import { Box, Typography, Avatar } from '@mui/material'
import { styled } from '@mui/material/styles'
import AddIcon from '@mui/icons-material/Add'

const ProfileContainer = styled(Box)({
  position: 'fixed',
  width: '211px',
  height: '132px',
  top: '427px',
  left: '200px',
  background: '#FEFDFF',
  borderBottom: '4px solid #B2FD27'
})

const ProfilePicture = styled(Avatar)({
  position: 'absolute',
  width: '42px',
  height: '42px',
  top: '20px',  
  left: '19px', 
  borderRadius: '21px',
  border: '2px solid #FFFFFF'
})

const Username = styled(Typography)({
  position: 'absolute',
  width: '120px', 
  top: '25px',
  left: '52px',
  fontFamily: 'Joti One',
  fontWeight: 400,
  fontSize: '16px',
  lineHeight: '100%',
  letterSpacing: '0%',
  color: '#000000',
  whiteSpace: 'nowrap',    
  overflow: 'hidden',       
  textOverflow: 'ellipsis'  
});



const Handle = styled(Typography)({
  position: 'absolute',
  width: '53px',
  height: '10px',
  top: '47px', 
  left: '72px', 
  fontFamily: 'Montserrat',
  fontWeight: 400,
  fontSize: '8px',
  lineHeight: '100%',
  letterSpacing: '0%',
  color: '#000000'
})

const StatBox = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  position: 'absolute',
  height: '28px'
})

const StatValue = styled(Typography)({
  fontFamily: 'Montserrat',
  fontWeight: 600,
  fontSize: '10px',
  lineHeight: '100%',
  letterSpacing: '0%',
  color: '#000000'
})

const StatLabel = styled(Typography)({
  fontFamily: 'Montserrat',
  fontWeight: 400,
  fontSize: '10px',
  lineHeight: '100%',
  letterSpacing: '0%',
  color: '#000000'
})

const PostsStats = styled(StatBox)({
  width: '28px',
  top: '80px', 
  left: '20px'  
})

const FollowersStats = styled(StatBox)({
  width: '48px',
  top: '80px', 
  left: '71px' 
})

const FollowingStats = styled(StatBox)({
  width: '49px',
  top: '80px', 
  left: '142px' 
})

const TagsContainer = styled(Box)({
  position: 'fixed',
  width: '211px',
  height: '120px',
  top: '569px',
  left: '200px',
  borderWidth: '1px',
  background: '#FFFFFF',
  borderRight: '4px solid #B2FD27'
})

const TagsHeader = styled(Box)({
  position: 'absolute',
  width: '172px',
  height: '24px',
  top: '18px',
  left: '20px',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  whiteSpace: 'nowrap',     
  overflow: 'hidden',       
  textOverflow: 'ellipsis'  // Add ellipsis (...) when text overflows
});

const TagsTitle = styled(Typography)({
  width: '77px',
  height: '20px',
  fontFamily: 'Montserrat',
  fontWeight: 600,
  fontSize: '16px',
  lineHeight: '100%',
  letterSpacing: '0%',
  color: '#000000'
})

const AddText = styled(Typography)({
  width: '37px',
  height: '12px',
  fontFamily: 'Montserrat',
  fontWeight: 400,
  fontSize: '10px',
  lineHeight: '100%',
  letterSpacing: '0%',
  color: '#000000'
})

const IconWrapper = styled(Box)({
  width: '24px',
  height: '24px',
  position: 'relative',
  cursor: 'pointer',
  '& .MuiSvgIcon-root': {
    position: 'absolute',
    width: '14px',
    height: '14px',
    top: '5px',
    left: '5px',
    color: '#000000'
  }
})

const Divider = styled(Box)({
  position: 'absolute',
  width: '171px',
  height: '1px',
  top: '51px',
  left: '18px',
  backgroundColor: '#D9D9D9'
})

const TagItem = styled(Box)({
  position: 'absolute',
  width: '94px',
  height: '35px',
  top: '66px',
  left: '20px',
  borderRadius: '17.5px',
  display: 'flex',
  alignItems: 'center'
})

const TagImage = styled(Avatar)({
  width: '35px',
  height: '35px',
  borderRadius: '17.5px'
})

const TagInfo = styled(Box)({
  marginLeft: '7px'
})

const TagName = styled(Typography)({
  width: '52px',
  height: '15px',
  fontFamily: 'Montserrat',
  fontWeight: 600,
  fontSize: '12px',
  lineHeight: '100%',
  letterSpacing: '0%',
  color: '#000000'
})

const PostCount = styled(Typography)({
  width: '40px',
  height: '12px',
  fontFamily: 'Montserrat',
  fontWeight: 400,
  fontSize: '10px',
  lineHeight: '100%',
  letterSpacing: '0%',
  color: '#000000'
})

const ProfileCard = () => {
  return (
    <>
      <ProfileContainer>
        <ProfilePicture src="/path-to-profile-pic.jpg" />
        <Username>User Name</Username>
        <Handle>@username</Handle>

        <PostsStats>
          <StatValue>150</StatValue>
          <StatLabel>Posts</StatLabel>
        </PostsStats>

        <FollowersStats>
          <StatValue>200</StatValue>
          <StatLabel>Followers</StatLabel>
        </FollowersStats>

        <FollowingStats>
          <StatValue>200</StatValue>
          <StatLabel>Following</StatLabel>
        </FollowingStats>
      </ProfileContainer>

      <TagsContainer>
        <TagsHeader>
          <TagsTitle>Mes Tags</TagsTitle>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <AddText>Ajouter</AddText>
            <IconWrapper>
              <AddIcon />
            </IconWrapper>
          </Box>
        </TagsHeader>

        <Divider />

        <TagItem>
          <TagImage src="/path-to-tag-image.jpg" />
          <TagInfo>
            <TagName>tagname</TagName>
            <PostCount>10 posts</PostCount>
          </TagInfo>
        </TagItem>
      </TagsContainer>
    </>
  )
}

export default ProfileCard
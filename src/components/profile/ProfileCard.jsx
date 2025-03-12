import { useState } from 'react'
import { Box } from '@mui/material'
import AddIcon from '@mui/icons-material/Add'
import AddTagPopup from '../popups/AddTagPopup'
import {
  ProfileContainer,
  ProfileHeader,
  ProfilePicture,
  UserInfo,
  Username,
  Handle,
  StatsContainer,
  PostsStats,
  FollowersStats,
  FollowingStats,
  StatValue,
  StatLabel,
  TagsContainer,
  TagsHeader,
  TagsTitle,
  AddText,
  IconWrapper,
  Divider,
  TagItem,
  TagImage,
  TagInfo,
  TagName,
  PostCount
} from './ProfileCard.styles'

const ProfileCard = () => {
  const [openDialog, setOpenDialog] = useState(false)
  const [newTag, setNewTag] = useState('')

  const handleOpenDialog = () => {
    setOpenDialog(true)
  }

  const handleCloseDialog = () => {
    setOpenDialog(false)
    setNewTag('') 
  }

  const handleAddTag = () => {
    if (newTag.trim()) {
      // handle adding the tag
      console.log('Adding tag:', newTag)
      handleCloseDialog()
    }
  }

  return (
    <>
      <ProfileContainer>
        <ProfileHeader>
          <ProfilePicture src="/path-to-profile-pic.jpg" />
          <UserInfo>
            <Username>User Name</Username>
            <Handle>@username</Handle>
          </UserInfo>
        </ProfileHeader>

        <StatsContainer>
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
        </StatsContainer>
      </ProfileContainer>

      <TagsContainer>
        <TagsHeader>
          <TagsTitle>Mes Tags</TagsTitle>
          <Box 
            sx={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: 1, 
              cursor: 'pointer' 
            }}
            onClick={handleOpenDialog}
          >
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

      <AddTagPopup
        open={openDialog}
        onClose={handleCloseDialog}
        value={newTag}
        onChange={(e) => setNewTag(e.target.value)}
        onAdd={handleAddTag}
      />
    </>
  )
}

export default ProfileCard
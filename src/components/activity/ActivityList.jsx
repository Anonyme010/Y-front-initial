import { useState } from 'react'
import { Box } from '@mui/material'
import ActivityListPopup from '../popups/ActivityListPopup'
import {
  ActivityContainer,
  ActivityHeader,
  HeaderTitle,
  ViewAllLink,
  Divider,
  ActivityItemContainer,
  ActivityAvatar,
  ActivityContent,
  Username,
  ActionText,
  FollowButtonContainer,
  StyledFollowButton,
  ActivityImage
} from './ActivityList.styles'

const ActivityItem = ({ avatar, username, action, time, image, showFollowButton }) => (
  <ActivityItemContainer>
    <ActivityAvatar src={avatar} />
    <ActivityContent>
      <Username>{username}</Username>
      <ActionText>{action} {time}</ActionText>
    </ActivityContent>
    {showFollowButton ? (
      <FollowButtonContainer>
        <StyledFollowButton>
          Suivre
        </StyledFollowButton>
      </FollowButtonContainer>
    ) : image && (
      <ActivityImage src={image} component="img" />
    )}
  </ActivityItemContainer>
)

const ActivityList = () => {
  const [openDialog, setOpenDialog] = useState(false)
  
  const activities = [
    {
      username: 'UserX',
      action: 'a commencé à te suivre',
      time: '5min',
      showFollowButton: true
    },
    {
      username: 'UserY',
      action: 'a aimé votre post',
      time: '10min',
      showFollowButton: true
    },
    {
      username: 'UserZ',
      action: 'a commenté votre post',
      time: '15min',
      showFollowButton: true
    },
    {
      username: 'UserW',
      action: 'a partagé votre post',
      time: '20min',
      showFollowButton: true
    }
  ]

  const handleOpenDialog = () => {
    setOpenDialog(true)
  }

  const handleCloseDialog = () => {
    setOpenDialog(false)
  }

  return (
    <>
      <ActivityContainer>
        <ActivityHeader>
          <HeaderTitle>Activities</HeaderTitle>
          <ViewAllLink onClick={handleOpenDialog} underline="none" sx={{ cursor: 'pointer' }}>
            Voir tout
          </ViewAllLink>
        </ActivityHeader>

        <Divider />

        <Box sx={{ mt: 2 }}>
          {activities.slice(0, 2).map((activity, index) => (
            <ActivityItem key={index} {...activity} />
          ))}
        </Box>
      </ActivityContainer>

      <ActivityListPopup
        open={openDialog}
        onClose={handleCloseDialog}
        activities={[...activities, ...activities, ...activities]}
      />
    </>
  )
}

export default ActivityList
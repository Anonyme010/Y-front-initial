import { Dialog, DialogTitle, DialogContent, Box } from '@mui/material'
import {
  ActivityItemContainer,
  ActivityAvatar,
  ActivityContent,
  Username,
  ActionText,
  FollowButtonContainer,
  StyledFollowButton,
  ActivityImage
} from '../activity/ActivityList.styles'

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

const ActivityListPopup = ({ open, onClose, activities, title = 'Toutes les activités' }) => {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="sm"
      fullWidth
      PaperProps={{
        sx: {
          borderRadius: '16px',
          maxWidth: '300px',
          height: '80vh'
        }
      }}
    >
      <DialogTitle sx={{ 
        fontFamily: 'Montserrat',
        fontWeight: 600,
        fontSize: '20px',
        pb: 1
      }}>
        {title}
      </DialogTitle>
      <DialogContent sx={{ 
        p: 2,
        overflowY: 'auto',
        '&::-webkit-scrollbar': {
          width: '8px'
        },
        '&::-webkit-scrollbar-track': {
          background: '#f1f1f1',
          borderRadius: '4px'
        },
        '&::-webkit-scrollbar-thumb': {
          background: '#888',
          borderRadius: '4px',
          '&:hover': {
            background: '#555'
          }
        }
      }}>
        <Box sx={{ 
          display: 'flex',
          flexDirection: 'column',
          gap: 2,
        }}>
          {activities?.map((activity, index) => (
            <ActivityItem key={index} {...activity} />
          ))}
        </Box>
      </DialogContent>
    </Dialog>
  )
}

export default ActivityListPopup
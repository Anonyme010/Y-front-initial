import { Dialog, DialogTitle, DialogContent, Box } from '@mui/material'
import {
  SuggestionItemContainer,
  SuggestionAvatar,
  Username,
  FollowButtonContainer,
  StyledFollowButton
} from '../activity/SuggestionList.styles'

const SuggestionItem = ({ avatar, username }) => (
  <SuggestionItemContainer>
    <SuggestionAvatar src={avatar} />
    <Username>{username}</Username>
    <FollowButtonContainer>
      <StyledFollowButton variant="contained">
        Suivre
      </StyledFollowButton>
    </FollowButtonContainer>
  </SuggestionItemContainer>
)

const SuggestionListPopup = ({ open, onClose, suggestions }) => {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="sm"
      fullWidth
      PaperProps={{
        sx: {
          borderRadius: '16px',
          maxWidth: '280px',
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
        Suggestions à suivre
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
          {suggestions?.map((suggestion, index) => (
            <SuggestionItem key={index} {...suggestion} />
          ))}
        </Box>
      </DialogContent>
    </Dialog>
  )
}

export default SuggestionListPopup
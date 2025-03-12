import { useState } from 'react'
import { Box } from '@mui/material'
import SuggestionListPopup from '../popups/SuggestionListPopup'
import {
  SuggestionContainer,
  SuggestionHeader,
  HeaderTitle,
  ViewAllLink,
  Divider,
  SuggestionItemContainer,
  SuggestionAvatar,
  Username,
  FollowButtonContainer,
  StyledFollowButton
} from './SuggestionList.styles'

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

const SuggestionList = () => {
  const [openDialog, setOpenDialog] = useState(false)

  const suggestions = [
    {
      username: 'UserY',
      avatar: '/path/to/avatar1.jpg'
    },
    {
      username: 'UserX',
      avatar: '/path/to/avatar2.jpg'
    },
    {
      username: 'UserZ',
      avatar: '/path/to/avatar3.jpg'
    },
    {
      username: 'UserW',
      avatar: '/path/to/avatar4.jpg'
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
      <SuggestionContainer>
        <SuggestionHeader>
          <HeaderTitle>Suggestions</HeaderTitle>
          <ViewAllLink onClick={handleOpenDialog} sx={{ cursor: 'pointer' }} underline="none">
            Voir tout
          </ViewAllLink>
        </SuggestionHeader>

        <Divider />

        <Box sx={{ mt: 2 }}>
          {suggestions.slice(0, 2).map((suggestion, index) => (
            <SuggestionItem key={index} {...suggestion} />
          ))}
        </Box>
      </SuggestionContainer>

      <SuggestionListPopup 
        open={openDialog}
        onClose={handleCloseDialog}
        suggestions={[...suggestions, ...suggestions, ...suggestions]}
      />
    </>
  )
}

export default SuggestionList
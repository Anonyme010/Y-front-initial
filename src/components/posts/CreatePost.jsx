import { useState } from 'react'
import { 
  Box, 
  Paper, 
  Avatar, 
  InputBase,
  Button,
  IconButton,
  Stack
} from '@mui/material'
import ImageIcon from '@mui/icons-material/Image'
import VideocamIcon from '@mui/icons-material/Videocam'

const CreatePost = () => {
  const [message, setMessage] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle post creation
    console.log('Post content:', message)
    setMessage('')
  }

  return (
    <Paper sx={{ 
      p: 2, 
      mb: 2, 
      width: '100%',
      maxWidth: 600, 
      mx: 'auto', 
      position: 'relative',
      left: '-146px'
    }}>
      <form onSubmit={handleSubmit}>
        <Box sx={{ display: 'flex', gap: 2 }}>
          <Avatar />
          <Box sx={{ flexGrow: 1 }}>
            <Paper
              variant="outlined"
              sx={{
                p: 1,
                mb: 2,
                borderRadius: 5
              }}
            >
              <InputBase
                fullWidth
                placeholder="Partager un message..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                multiline
                minRows={2}
              />
            </Paper>
            
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <Stack direction="row" spacing={1}>
                <IconButton color="primary">
                  <ImageIcon />
                </IconButton>
                <IconButton color="primary">
                  <VideocamIcon />
                </IconButton>
              </Stack>
              
              <Button 
                variant="contained" 
                type="submit"
                sx={{ 
                  borderRadius: 5,
                  px: 3,
                  bgcolor: 'success.light',
                  '&:hover': {
                    bgcolor: 'success.main',
                  }
                }}
              >
                Publier
              </Button>
            </Box>
          </Box>
        </Box>
      </form>
    </Paper>
  )
}

export default CreatePost
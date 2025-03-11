import { useState } from 'react'
import { Box, Button, Stack } from '@mui/material'
import MainLayout from '../components/layout/MainLayout'
import CreatePost from '../components/posts/CreatePost'
import PostCard from '../components/posts/PostCard'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import { useDarkMode } from '../context/DarkModeContext'

const HomePage = () => {
  const [sortBy, setSortBy] = useState('recent')
  const { isDarkMode } = useDarkMode();

  const posts = [
    {
      id: 1,
      username: 'User1',
      content: 'Premier post test',
      timestamp: 'il y a 5 minutes'
    },
    {
      id: 2,
      username: 'User2',
      content: 'Deuxième post test',
      timestamp: 'il y a 10 minutes'
    }
  ]

  return (
    <MainLayout>
      <Box
        sx={{
          position: 'relative',
          zIndex: 1,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          width: '100%'
        }}
      >
        <CreatePost />
        
        <Box sx={{ 
          width: '100%', 
          display: 'flex', 
          justifyContent: 'flex-start',
          mb: 2,
          pl: '400px' 
        }}>
          <Button
            endIcon={<KeyboardArrowDownIcon />}
            sx={{ 
              color: isDarkMode ? '#FFFFFF' : 'text.secondary',
              textTransform: 'none',
              '&:hover': { bgcolor: 'transparent' }
            }}
          >
            Trier par: Récents
          </Button>
        </Box>

        <Stack spacing={2} sx={{ width: '100%' }}>
          {posts.map(post => (
            <PostCard key={post.id} post={post} />
          ))}
        </Stack>
      </Box>
    </MainLayout>
  )
}

export default HomePage
import { useState, useEffect } from 'react'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import MainLayout from '../components/layout/MainLayout'
import CreatePost from '../components/posts/CreatePost'
import ProfilePageHeader from '../components/profile/ProfilePageHeader'
import PostCard from '../components/posts/PostCard'
import { useDarkMode } from '../context/DarkModeContext'
import { useTheme } from '@mui/material/styles';
import {
  PageContainer,
  SortContainer,
  SortButton,
  PostsStack,
  SortMenu,
  SortMenuItem
} from './HomePage.styles'

const HomePage = () => {
  const [sortBy, setSortBy] = useState('recent')
  const [anchorEl, setAnchorEl] = useState(null)
  const [activeView, setActiveView] = useState('home')
  const { isDarkMode } = useDarkMode()
  const theme = useTheme()
  const backgroundColor = isDarkMode ? '#121212' : theme.palette.background.default
  const open = Boolean(anchorEl)

  // Listen for changes in nav item selection
  useEffect(() => {
    const handleNavChange = (event) => {
      if (event.detail === 'profile') {
        setActiveView('profile')
      } else if (event.detail === 'home') {
        setActiveView('home')
      }
    }
    window.addEventListener('navItemChanged', handleNavChange)
    return () => window.removeEventListener('navItemChanged', handleNavChange)
  }, [])

  const handleSortClick = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleSortClose = () => {
    setAnchorEl(null)
  }

  const handleSortChange = (newSort) => {
    setSortBy(newSort)
    handleSortClose()
  }

  const getSortLabel = () => {
    switch (sortBy) {
      case 'recent':
        return 'Récents'
      case 'popular':
        return 'Populaire'
      case 'followed':
        return 'Suivis'
      default:
        return 'Récents'
    }
  }

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
      <PageContainer style={{ backgroundColor }}>
        {activeView === 'home' ? <CreatePost /> : <ProfilePageHeader />}
        
        <SortContainer style={{ 
          backgroundColor,
          '--gradient-color': backgroundColor
        }}>
          <SortButton
            endIcon={<KeyboardArrowDownIcon />}
            isDarkMode={isDarkMode}
            onClick={handleSortClick}
            aria-controls={open ? 'sort-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
          >
            Trier par: {getSortLabel()}
          </SortButton>

          <SortMenu
            id="sort-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleSortClose}
            MenuListProps={{
              'aria-labelledby': 'sort-button',
            }}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'right',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
          >
            <SortMenuItem 
              onClick={() => handleSortChange('recent')}
              selected={sortBy === 'recent'}
            >
              Récents
            </SortMenuItem>
            <SortMenuItem 
              onClick={() => handleSortChange('popular')}
              selected={sortBy === 'popular'}
            >
              Populaire
            </SortMenuItem>
            <SortMenuItem 
              onClick={() => handleSortChange('followed')}
              selected={sortBy === 'followed'}
            >
              Suivis
            </SortMenuItem>
          </SortMenu>
        </SortContainer>

        <PostsStack spacing={2}>
          {posts.map(post => (
            <PostCard key={post.id} post={post} />
          ))}
        </PostsStack>
      </PageContainer>
    </MainLayout>
  )
}

export default HomePage
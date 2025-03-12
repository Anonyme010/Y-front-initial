import { useState } from 'react'
import { Typography } from '@mui/material'
import HomeIcon from '@mui/icons-material/Home'
import PersonIcon from '@mui/icons-material/Person'
import NotificationsIcon from '@mui/icons-material/Notifications'
import BookmarkIcon from '@mui/icons-material/Bookmark'
import GroupIcon from '@mui/icons-material/Group'
import ActivityListPopup from '../popups/ActivityListPopup'
import {
  NavContainer,
  HomeItem,
  ProfileItem,
  NotificationsItem,
  SavedItem,
  InteractionsItem,
  CreatePostButton
} from './LeftNav.styles'

const LeftNav = () => {
  const [activeItem, setActiveItem] = useState('home')
  const [openDialog, setOpenDialog] = useState(false)
  const [dialogTitle, setDialogTitle] = useState('')
  const [dialogActivities, setDialogActivities] = useState([])

  const handleCreatePost = () => {
    // Scroll to top
    const mainContent = document.querySelector('.MuiBox-root.css-1tu59u4');
    if (mainContent) {
      mainContent.scrollTo({ top: 0, behavior: 'smooth' });
    }

    // Focus the create post input
    const createPostInput = document.querySelector('.MuiInputBase-input[placeholder="Partager un message..."]');
    if (createPostInput) {
      createPostInput.focus();
    }
  };

  const notifications = [
    {
      username: 'UserA',
      action: 'a aimé votre post',
      time: '2min',
      avatar: '/path-to-avatar.jpg'
    },
    {
      username: 'UserB',
      action: 'a commenté votre post',
      time: '5min',
      avatar: '/path-to-avatar.jpg'
    },
    {
      username: 'UserC',
      action: 'a partagé votre post',
      time: '10min',
      avatar: '/path-to-avatar.jpg'
    }
  ]

  const interactions = [
    {
      username: 'UserX',
      action: 'a commencé à te suivre',
      time: '3min',
      avatar: '/path-to-avatar.jpg',
      showFollowButton: true
    },
    {
      username: 'UserY',
      action: 'a commencé à te suivre',
      time: '7min',
      avatar: '/path-to-avatar.jpg',
      showFollowButton: true
    },
    {
      username: 'UserZ',
      action: 'a commencé à te suivre',
      time: '15min',
      avatar: '/path-to-avatar.jpg',
      showFollowButton: true
    }
  ]

  const handleNavItemClick = (item) => {
    setActiveItem(item)
    // Dispatch custom event for navigation changes
    window.dispatchEvent(new CustomEvent('navItemChanged', { detail: item }))
    
    // Handle popup dialogs
    if (item === 'notifications') {
      setDialogTitle('Notifications')
      setDialogActivities([...notifications, ...notifications, ...notifications])
      setOpenDialog(true)
    } else if (item === 'interactions') {
      setDialogTitle('Interactions')
      setDialogActivities([...interactions, ...interactions, ...interactions])
      setOpenDialog(true)
    }
  }

  const handleCloseDialog = () => {
    setOpenDialog(false)
  }

  return (
    <>
      <NavContainer>
        <HomeItem 
          active={activeItem === 'home'} 
          onClick={() => handleNavItemClick('home')}
        >
          <HomeIcon />
          <Typography>Accueil</Typography>
        </HomeItem>

        <ProfileItem 
          active={activeItem === 'profile'} 
          onClick={() => handleNavItemClick('profile')}
        >
          <PersonIcon />
          <Typography>Profile</Typography>
        </ProfileItem>

        <NotificationsItem 
          active={activeItem === 'notifications'} 
          onClick={() => handleNavItemClick('notifications')}
        >
          <NotificationsIcon />
          <Typography>Notifications</Typography>
        </NotificationsItem>

        <SavedItem 
          active={activeItem === 'saved'} 
          onClick={() => handleNavItemClick('saved')}
        >
          <BookmarkIcon />
          <Typography>Enregistrement</Typography>
        </SavedItem>

        <InteractionsItem 
          active={activeItem === 'interactions'} 
          onClick={() => handleNavItemClick('interactions')}
        >
          <GroupIcon />
          <Typography>Interactions</Typography>
        </InteractionsItem>

        <CreatePostButton onClick={handleCreatePost}>
          <Typography>Créer un post</Typography>
        </CreatePostButton>
      </NavContainer>

      <ActivityListPopup
        open={openDialog}
        onClose={handleCloseDialog}
        activities={dialogActivities}
        title={dialogTitle}
      />
    </>
  )
}

export default LeftNav
import { useState } from 'react'
import { Button, Typography } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'
import Brightness4Icon from '@mui/icons-material/Brightness4'
import Brightness7Icon from '@mui/icons-material/Brightness7'
import { useDarkMode } from '../../context/DarkModeContext'
import ProfileMenuPopup from '../popups/ProfileMenuPopup'
import ProfileEditPopup from '../popups/ProfileEditPopup'
import {
  StyledAppBar,
  StyledContainer,
  StyledToolbar,
  LogoText,
  Search,
  SearchIconWrapper,
  StyledInputBase,
  AuthSection,
  ProfileSection,
  ProfilePic,
  Username,
  StyledChevron,
  DarkModeButton
} from './TopNav.styles'

const TopNav = () => {
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  const [anchorEl, setAnchorEl] = useState(null);
  const [showEditProfile, setShowEditProfile] = useState(false);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleModifyProfile = () => {
    handleClose();
    setShowEditProfile(true);
  };

  const handleLogout = () => {
    handleClose();
    // Logout logic  here
  };

  return (
    <StyledAppBar>
      <StyledContainer maxWidth={false}>
        <StyledToolbar>
          <LogoText>Y</LogoText>
          
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Rechercher"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>

          <DarkModeButton onClick={toggleDarkMode}>
            {isDarkMode ? <Brightness7Icon /> : <Brightness4Icon />}
          </DarkModeButton>

          <AuthSection>
            <Button>Connexion</Button>
            <Typography>|</Typography>
            <Button>S'inscrire</Button>
          </AuthSection>

          <ProfileSection>
            <ProfilePic />
            <Username>Username</Username>
            <StyledChevron 
              onClick={handleClick}
              style={{ cursor: 'pointer' }}
              aria-controls={open ? 'profile-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
            />
            <ProfileMenuPopup 
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              onModifyProfile={handleModifyProfile}
              onLogout={handleLogout}
            />
            <ProfileEditPopup
              open={showEditProfile}
              onClose={() => setShowEditProfile(false)}
              initialData={{
                name: 'User Name',
                username: 'Username',
                avatarUrl: ''
              }}
            />
          </ProfileSection>
        </StyledToolbar>
      </StyledContainer>
    </StyledAppBar>
  )
}

export default TopNav
import { AppBar, Toolbar, Box, Avatar, Typography, Button, InputBase, IconButton, Container } from '@mui/material'
import { styled } from '@mui/material/styles'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import SearchIcon from '@mui/icons-material/Search'
import Brightness4Icon from '@mui/icons-material/Brightness4'
import Brightness7Icon from '@mui/icons-material/Brightness7'
import { useDarkMode } from '../../context/DarkModeContext'

const LogoText = styled(Typography)({
  position: 'absolute',
  width: '33.738765716552734px',
  height: '67.9546890258789px',
  top: '1px',
  left: '210px',
  fontFamily: 'Joti One',
  fontWeight: 400,
  fontSize: '55px',
  lineHeight: '100%',
  letterSpacing: '0%',
  color: '#000000'
})

const Search = styled('div')({
  position: 'absolute',
  width: '191.76174926757812px',
  height: '27.993953704833984px',
  top: '17px',
  left: '260px',
  backgroundColor: '#F2F2F2',
  borderRadius: '14px',
  display: 'flex',
  alignItems: 'center'
})

const SearchIconWrapper = styled('div')({
  width: '22px',
  height: '22px',
  position: 'absolute',
  left: '7px',
  top: '3px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  '& .MuiSvgIcon-root': {
    width: '16.032499313354492px',
    height: '16.032499313354492px',
    color: '#CCCCCE'
  }
})

const StyledInputBase = styled(InputBase)({
  width: '93px',
  height: '20px',
  position: 'absolute',
  left: '40px',
  top: '4px',
  '& .MuiInputBase-input': {
    fontFamily: 'Montserrat',
    fontWeight: 400,
    fontSize: '16px',
    lineHeight: '100%',
    letterSpacing: '0%',
    color: '#CCCCCE',
    padding: 0,
    '&::placeholder': {
      color: '#CCCCCE',
      opacity: 1
    }
  }
})

const AuthSection = styled(Box)({
  position: 'absolute',
  width: '182px',
  height: '20px',
  top: '23px',
  left: '841px',
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
  '& .MuiButton-root': {
    fontFamily: 'Montserrat',
    fontWeight: 600,
    fontSize: '16px',
    lineHeight: '100%',
    letterSpacing: '0%',
    color: '#000000',
    textTransform: 'none',
    padding: 0,
    minWidth: 'unset'
  },
  '& .MuiTypography-root': {
    color: '#000000'
  }
})

const ProfileSection = styled(Box)({
  position: 'absolute',
  width: '162px',
  height: '44px',
  top: '11px',
  left: '1060px',
  display: 'flex',
  alignItems: 'center'
})

const ProfilePic = styled(Avatar)({
  position: 'absolute',
  width: '44px',
  height: '44px',
  top: '0',
  left: '0',
  borderRadius: '22px',
  border: '4px solid #B2FD27'
})

const Username = styled(Typography)({
  position: 'absolute',
  width: '82px',
  height: '21px',
  left: '51px',
  top: '12px',
  fontFamily: 'Joti One',
  fontWeight: 400,
  fontSize: '16px',
  lineHeight: '100%',
  letterSpacing: '0%',
  color: '#000000'
})

const StyledChevron = styled(KeyboardArrowDownIcon)({
  position: 'absolute',
  width: '16px',
  height: '16px',
  right: '9px',
  top: '12px',
  color: '#000000',
  '& .MuiSvgIcon-root': {
    width: '13.333353996276855px',
    height: '6.685035705566406px'
  }
})

const DarkModeButton = styled(IconButton)({
  position: 'absolute',
  width: '40px',
  height: '40px',
  top: '8px',
  left: '50%',
  transform: 'translateX(-50%)',
  color: '#000000'
})

const TopNav = () => {
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  return (
    <AppBar 
      sx={{ 
        width: '100%',
        height: '56px',
        top: 0,
        bgcolor: 'white',
        boxShadow: 'none',
        position: 'fixed'
      }}
    >
      <Container maxWidth={false}>
        <Toolbar sx={{ minHeight: '68px !important', padding: 0, position: 'relative' }}>
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
            <StyledChevron />
          </ProfileSection>
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default TopNav
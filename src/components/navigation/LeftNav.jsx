import { Box, Typography, Button } from '@mui/material'
import { styled } from '@mui/material/styles'
import GridViewIcon from '@mui/icons-material/GridView'
import PersonIcon from '@mui/icons-material/Person'
import NotificationsIcon from '@mui/icons-material/Notifications'
import BookmarkIcon from '@mui/icons-material/Bookmark'
import PeopleIcon from '@mui/icons-material/People'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz'

const NavContainer = styled(Box)({
  position: 'fixed',
  width: '211px',
  height: '350px',
  top: '70px',
  left: '200px',
  backgroundColor: '#FFFFFF',
  borderTopRightRadius: '24px',
  borderBottomRightRadius: '24px'
})

const NavItem = styled(Box)(({ active }) => ({
  display: 'flex',
  alignItems: 'center',
  position: 'relative',
  '& .MuiSvgIcon-root': {
    width: '22px',
    height: '22px',
    color: active ? '#B2FD27' : '#000000',
    '& svg': {
      width: '18.333332061767578px',
      height: '18.333332061767578px',
      top: '1.83px',
      left: '1.83px',
      borderRadius: '3px'
    }
  },
  '& .MuiTypography-root': {
    marginLeft: '13px',
    color: active ? '#B2FD27' : '#000000',
    fontFamily: 'Montserrat',
    fontWeight: 400,
    fontSize: '16px',
    lineHeight: '100%',
    letterSpacing: '0%'
  }
}))

const HomeItem = styled(NavItem)({
  width: '94px',
  height: '22px',
  position: 'absolute',
  top: '23px',
  left: '21px'
})

const ProfileItem = styled(NavItem)({
  width: '86px',
  height: '22px',
  position: 'absolute',
  top: '68px',
  left: '22px'
})

const NotificationsItem = styled(NavItem)({
  width: '136px',
  height: '22px',
  position: 'absolute',
  top: '115px',
  left: '22px'
})

const SavedItem = styled(NavItem)({
  width: '171px',
  height: '22px',
  position: 'absolute',
  top: '158px',
  left: '20px'
})

const InteractionsItem = styled(NavItem)({
  width: '130px',
  height: '22px',
  position: 'absolute',
  top: '204px',
  left: '22px'
})

const MoreItem = styled(NavItem)({
  width: '69px',
  height: '28px',
  position: 'absolute',
  top: '250px',
  left: '22px'
})

const CreatePostButton = styled(Button)({
  width: '171px',
  height: '40px',
  position: 'absolute',
  top: '290px',
  left: '20px',
  borderRadius: '20px',
  backgroundColor: '#B2FD27',
  '&:hover': {
    backgroundColor: '#a1e923'
  },
  '& .MuiTypography-root': {
    fontFamily: 'Joti One',
    fontWeight: 400,
    fontSize: '16px',
    lineHeight: '100%',
    letterSpacing: '0%',
    color: '#000000'
  }
})

const LeftNav = () => {
  return (
    <NavContainer>
      <HomeItem active>
        <GridViewIcon />
        <Typography>Accueil</Typography>
      </HomeItem>

      <ProfileItem>
        <PersonIcon />
        <Typography>Profil</Typography>
      </ProfileItem>

      <NotificationsItem>
        <NotificationsIcon />
        <Typography>Notifications</Typography>
      </NotificationsItem>

      <SavedItem>
        <BookmarkIcon />
        <Typography>Enregistrements</Typography>
      </SavedItem>

      <InteractionsItem>
        <PeopleIcon />
        <Typography>Interactions</Typography>
      </InteractionsItem>

      <MoreItem>
        <MoreHorizIcon />
        <Typography>Plus</Typography>
      </MoreItem>

      <CreatePostButton>
        <Typography>Créer un post</Typography>
      </CreatePostButton>
    </NavContainer>
  )
}

export default LeftNav
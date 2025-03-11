import { Box } from '@mui/material'
import LeftNav from '../navigation/LeftNav'
import TopNav from '../navigation/TopNav'
import ProfileCard from '../profile/ProfileCard'
import ActivityList from '../activity/ActivityList'
import SuggestionList from '../activity/SuggestionList'
import BackgroundLayout from './BackgroundLayout'
import { useDarkMode } from '../../context/DarkModeContext'

const MainLayout = ({ children }) => {
  const { isDarkMode } = useDarkMode();

  return (
    <Box sx={{ 
      minHeight: '100vh',
      width: '100vw',
      bgcolor: isDarkMode ? '#121212' : 'grey.50',
      transition: 'background-color 0.3s ease',
      overflowX: 'hidden',
      position: 'relative'
    }}>
      <BackgroundLayout />
      <TopNav />
      <Box 
        sx={{ 
          width: '100%',
          display: 'grid',
          gridTemplateColumns: {
            xs: '1fr',
            md: '240px 1fr',
            lg: '240px 1fr 320px'
          },
          gap: { xs: 1, md: 3 },
          pt: 9,
          pb: 4,
          px: { xs: 1, md: 2 },
          position: 'relative',
          zIndex: 1
        }}
      >
        {/* Left Sidebar */}
        <Box 
          sx={{ 
            display: { xs: 'none', md: 'flex' },
            flexDirection: 'column',
            gap: 2
          }}
        >
          <LeftNav />
          <ProfileCard />
        </Box>

        {/* Main Content Area */}
        <Box 
          component="main"
          sx={{
            bgcolor: 'transparent',
            width: '100%'
          }}
        >
          {children}
        </Box>

        {/* Right Sidebar */}
        <Box 
          component="aside"
          sx={{
            
          }}
        >
          <ActivityList />
          <SuggestionList />
        </Box>
      </Box>
    </Box>
  )
}

export default MainLayout
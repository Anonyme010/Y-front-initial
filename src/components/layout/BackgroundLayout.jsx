import { Box } from '@mui/material'
import { useDarkMode } from '../../context/DarkModeContext'
import backgroundLight from '../../assets/Background.png'
import backgroundDark from '../../assets/BackgroundDark.png'

const BackgroundLayout = () => {
  const { isDarkMode } = useDarkMode();

  return (
    <Box
      sx={{
        position: 'fixed',
        height: 533,
        top: 300,
        left: '50%',
        transform: 'translateX(-50%)', // Centers the background horizontally
        backgroundColor: '#000000',
        backgroundImage: `url(${isDarkMode ? backgroundDark : backgroundLight})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        opacity: 0.63,
        zIndex: -1,
        width: '100%',
        minWidth: '100vw' // Ensures it spans the full viewport width
      }}
    />
  )
}

export default BackgroundLayout
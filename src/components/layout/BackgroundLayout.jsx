import { useDarkMode } from '../../context/DarkModeContext'
import backgroundLight from '../../assets/Background.png'
import backgroundDark from '../../assets/BackgroundDark.png'
import { BackgroundContainer } from './BackgroundLayout.styles'

const BackgroundLayout = () => {
  const { isDarkMode } = useDarkMode();

  return (
    <BackgroundContainer 
      backgroundImage={isDarkMode ? backgroundDark : backgroundLight}
    />
  )
}

export default BackgroundLayout
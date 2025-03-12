import LeftNav from '../navigation/LeftNav'
import TopNav from '../navigation/TopNav'
import ProfileCard from '../profile/ProfileCard'
import ActivityList from '../activity/ActivityList'
import SuggestionList from '../activity/SuggestionList'
import BackgroundLayout from './BackgroundLayout'
import { useDarkMode } from '../../context/DarkModeContext'
import {
  MainContainer,
  GridLayout,
  LeftSidebar,
  MainContent,
  RightSidebar
} from './MainLayout.styles'

const MainLayout = ({ children }) => {
  const { isDarkMode } = useDarkMode();

  return (
    <MainContainer isDarkMode={isDarkMode}>
      <BackgroundLayout />
      <TopNav />
      <GridLayout>
        <LeftSidebar>
          <LeftNav />
          <ProfileCard />
        </LeftSidebar>

        <MainContent component="main">
          {children}
        </MainContent>

        <RightSidebar component="aside">
          <ActivityList />
          <SuggestionList />
        </RightSidebar>
      </GridLayout>
    </MainContainer>
  )
}

export default MainLayout
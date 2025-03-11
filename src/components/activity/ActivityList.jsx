import {
  Box,
  Paper,
  Typography,
  Avatar,
  Button,
  Link,
} from '@mui/material'

const ActivityItem = ({ avatar, username, action, time, image, showFollowButton }) => (
  <Box 
    sx={{ 
      width: 169,
      height: 38,
      display: 'flex', 
      alignItems: 'flex-start', 
      position: 'relative',
      mb: 2
    }}
  >
    <Avatar 
      src={avatar} 
      sx={{ 
        width: 35, 
        height: 35, 
        borderRadius: '17.5px'
      }}
    />
    <Box sx={{ flex: 1 }}>
      <Typography 
        sx={{
          width: 28,
          height: 13,
          fontFamily: 'Joti One',
          fontWeight: 400,
          fontSize: '10px',
          lineHeight: '100%',
          letterSpacing: '0%',
          color: '#000000',
        }}
      >
        {username}
      </Typography>
      <Typography 
        sx={{
          width: 79,
          height: 24,
          fontFamily: 'Montserrat',
          fontWeight: 400,
          fontSize: '10px',
          lineHeight: '100%',
          letterSpacing: '0%',
          color: '#000000',
          mt: '1px'
        }}
      >
        {action} {time}
      </Typography>
    </Box>
    {showFollowButton ? (
      <Box
        sx={{
          width: 41,
          height: 21,
          position: 'relative',
          top: '8px'
        }}
      >
        <Button
          variant="contained"
          sx={{
            width: '100%',
            height: '100%',
            borderRadius: '10.5px',
            backgroundColor: '#000000',
            '&:hover': { backgroundColor: '#000000' },
            textTransform: 'none',
            fontFamily: 'Montserrat',
            fontWeight: 600,
            fontSize: '10px',
            lineHeight: '100%',
            letterSpacing: '0%',
            color: '#FFFFFF',
            minWidth: 'unset',
            padding: '0px',
            '& .MuiButton-label': {
              width: 33,
              height: 12
            }
          }}
        >
          Suivre
        </Button>
      </Box>
    ) : image && (
      <Box
        component="img"
        src={image}
        sx={{
          width: 35,
          height: 35,
          borderRadius: 1,
          objectFit: 'cover'
        }}
      />
    )}
  </Box>
)

const ActivityList = () => {
  const activities = [
    {
      username: 'UserX',
      action: 'a commencé à te suivre',
      time: '5min',
      showFollowButton: true
    },
    {
      username: 'UserX',
      action: 'a commencé à te suivre',
      time: '5min',
      showFollowButton: true
    }
  ]

  return (
    <Paper 
      sx={{ 
        width: 211, 
        height: 256,
        position: 'fixed', 
        top: 95,
        left: 1038,
        backgroundColor: '#FFFFFF',
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: '#E0E0E0',
        borderLeft: '4px solid #B2FD27',
        borderRadius: 0,
        padding: '20px',
        zIndex: 1000 
      }}
    >
      <Box 
        sx={{ 
          width: 169,
          height: 20,
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'space-between',
          position: 'relative'
        }}
      >
        <Typography 
          sx={{
            width: 72,
            height: 20,
            fontFamily: 'Montserrat',
            fontWeight: 600,
            fontSize: '16px',
            lineHeight: '100%',
            letterSpacing: '0%',
            color: '#000000'
          }}
        >
          Activities
        </Typography>
        <Link 
          href="#" 
          underline="none" 
          sx={{ 
            width: 43,
            height: 12,
            fontFamily: 'Montserrat',
            fontWeight: 400,
            fontSize: '10px',
            lineHeight: '100%',
            letterSpacing: '0%',
            color: '#000000'
          }}
        >
          Voir tout
        </Link>
      </Box>

      <Box 
        sx={{ 
          width: 171, 
          height: '1px', 
          backgroundColor: '#D9D9D9',
          my: 2,
          mx: -1
        }} 
      />

      <Box sx={{ mt: 2 }}>
        {activities.map((activity, index) => (
          <ActivityItem key={index} {...activity} />
        ))}
      </Box>
    </Paper>
  )
}

export default ActivityList
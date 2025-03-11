import {
  Box,
  Paper,
  Typography,
  Avatar,
  Button,
  Link,
} from '@mui/material'

const SuggestionItem = ({ avatar, username }) => (
  <Box 
    sx={{ 
      width: 169,
      height: 35,
      display: 'flex', 
      alignItems: 'center',
      gap: '7px',
      position: 'relative',
      mb: 1
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
    <Typography 
      sx={{
        width: 34,
        height: 13,
        fontFamily: 'Joti One',
        fontWeight: 400,
        fontSize: '10px',
        lineHeight: '100%',
        letterSpacing: '0%',
        color: '#000000',
        ml: 1
      }}
    >
      {username}
    </Typography>
    <Box
      sx={{
        width: 41,
        height: 21,
        position: 'absolute',
        right: 0
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
          padding: '0px'
        }}
      >
        Suivre
      </Button>
    </Box>
  </Box>
)

const SuggestionList = () => {
  const suggestions = [
    {
      username: 'UserY',
      avatar: '/path/to/avatar1.jpg'
    },
    {
      username: 'UserX',
      avatar: '/path/to/avatar2.jpg'
    }
  ]

  return (
    <Paper 
      sx={{ 
        width: 211, 
        height: 176,
        position: 'fixed', // Changed from 'absolute' to 'fixed'
        top: 381,
        left: 1038,
        backgroundColor: '#FFFFFF',
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: '#E0E0E0',
        borderLeft: '4px solid #B2FD27',
        borderRadius: 0,
        padding: '20px',
        zIndex: 1000 // Added to ensure it stays above other content
      }}
    >
      <Box 
        sx={{ 
          width: 169,
          height: 20,
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'space-between',
          mb: 2
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
          Suggestions
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
          mb: 2
        }} 
      />

      <Box sx={{ mt: 2 }}>
        {suggestions.map((suggestion, index) => (
          <SuggestionItem key={index} {...suggestion} />
        ))}
      </Box>
    </Paper>
  )
}

export default SuggestionList
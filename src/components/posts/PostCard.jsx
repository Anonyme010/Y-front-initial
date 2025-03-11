import {
  Avatar,
  Box,
  Card,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
  InputBase,
  Button,
} from '@mui/material'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz'
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined'
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline'
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder'
import SendIcon from '@mui/icons-material/Send'

const PostCard = ({ post }) => {
  return (
    <Card sx={{ mb: 1.5, maxWidth: 600 }}>
      {/* Post Header */}
      <Box sx={{ p: 1.5, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <Avatar sx={{ width: 32, height: 32 }} />
          <Box>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
              <Typography variant="subtitle2" sx={{ fontSize: '0.875rem' }}>username</Typography>
              <Typography variant="caption" color="text.secondary" sx={{ fontSize: '0.75rem' }}>
                @username
              </Typography>
            </Box>
            <Typography variant="caption" color="text.secondary" sx={{ fontSize: '0.75rem' }}>
              il y a 5 minutes
            </Typography>
          </Box>
        </Box>
        <IconButton size="small">
          <MoreHorizIcon fontSize="small" />
        </IconButton>
      </Box>

      {/* Post Content */}
      <CardContent sx={{ py: 0.5, px: 1.5 }}>
        <Typography variant="body2" sx={{ fontSize: '0.875rem' }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, nullam et semper augue.
        </Typography>
      </CardContent>

      {/* Post Image */}
      <CardMedia
        component="img"
        image="https://source.unsplash.com/random"
        alt="Post image"
        sx={{ aspectRatio: '16/10', maxHeight: 300 }}
      />

      {/* Post Actions */}
      <Box sx={{ p: 1, display: 'flex', gap: 2 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
          <IconButton size="small">
            <ThumbUpOutlinedIcon fontSize="small" />
          </IconButton>
          <Typography variant="caption" sx={{ fontSize: '0.75rem' }}>15</Typography>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
          <IconButton size="small">
            <ChatBubbleOutlineIcon fontSize="small" />
          </IconButton>
          <Typography variant="caption" sx={{ fontSize: '0.75rem' }}>3</Typography>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
          <IconButton size="small">
            <BookmarkBorderIcon fontSize="small" />
          </IconButton>
          <Typography variant="caption" sx={{ fontSize: '0.75rem' }}>3</Typography>
        </Box>
      </Box>

      {/* Comment Section */}
      <Box sx={{ px: 1.5, pb: 1, pt: 0 }}>
        <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
          <Avatar sx={{ width: 24, height: 24 }} />
          <Box
            sx={{
              flex: 1,
              display: 'flex',
              gap: 0.5,
              alignItems: 'center',
              bgcolor: 'grey.100',
              borderRadius: 3,
              px: 1.5,
              py: 0.25,
            }}
          >
            <InputBase
              placeholder="Écrire un commentaire..."
              sx={{ flex: 1, fontSize: '0.875rem' }}
            />
            <Button
              variant="contained"
              size="small"
              sx={{ 
                minWidth: 0, 
                p: 0.5, 
                borderRadius: '50%',
                width: 24,
                height: 24
              }}
            >
              <SendIcon sx={{ fontSize: '1rem' }} />
            </Button>
          </Box>
        </Box>
      </Box>
    </Card>
  )
}

export default PostCard
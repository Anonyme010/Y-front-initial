import { useState, useRef } from 'react'
import { Typography, Box } from '@mui/material'
import ImageIcon from '@mui/icons-material/Image'
import VideocamIcon from '@mui/icons-material/Videocam'
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt'
import ClearIcon from '@mui/icons-material/Clear'
import EmojiPicker from 'emoji-picker-react'
import {
  PostContainer,
  ContentWrapper,
  StyledAvatar,
  MainContent,
  InputWrapper,
  StyledInput,
  EmojiWrapper,
  ActionsWrapper,
  ActionGroup,
  IconTextGroup,
  IconWrapper,
  ActionText,
  PublishButton,
  EmojiPickerWrapper
} from './CreatePost.styles'

const CreatePost = () => {
  const [message, setMessage] = useState('')
  const [showEmojiPicker, setShowEmojiPicker] = useState(false)
  const [mediaFile, setMediaFile] = useState(null)
  const [mediaType, setMediaType] = useState(null) // 'image' or 'video'
  const fileInputRef = useRef(null)

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Post content:', {
      message,
      mediaFile,
      mediaType
    })
    setMessage('')
    setMediaFile(null)
    setMediaType(null)
  }

  const handleMediaClick = (type) => {
    fileInputRef.current.accept = type === 'image' ? 'image/*' : 'video/*'
    setMediaType(type)
    fileInputRef.current.click()
  }

  const handleFileChange = (e) => {
    const file = e.target.files[0]
    if (file) {
      setMediaFile(URL.createObjectURL(file))
    }
  }

  const handleRemoveMedia = () => {
    setMediaFile(null)
    setMediaType(null)
  }

  const handleEmojiClick = () => {
    setShowEmojiPicker(!showEmojiPicker)
  }

  const onEmojiClick = (emojiObject) => {
    setMessage(prevMessage => prevMessage + emojiObject.emoji)
    setShowEmojiPicker(false)
  }

  return (
    <PostContainer>
      <form onSubmit={handleSubmit}>
        <ContentWrapper>
          <StyledAvatar />
          <MainContent>
            <InputWrapper>
              <StyledInput
                placeholder="Partager un message..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                multiline
              />
              <EmojiWrapper onClick={handleEmojiClick}>
                <SentimentSatisfiedAltIcon />
              </EmojiWrapper>
            </InputWrapper>

            {showEmojiPicker && (
              <EmojiPickerWrapper>
                <EmojiPicker onEmojiClick={onEmojiClick} />
              </EmojiPickerWrapper>
            )}

            {mediaFile && (
              <Box sx={{
                position: 'relative',
                mt: 2,
                maxWidth: '100%',
                maxHeight: '300px',
                overflow: 'hidden',
                borderRadius: '8px'
              }}>
                {mediaType === 'image' ? (
                  <img 
                    src={mediaFile} 
                    alt="Selected" 
                    style={{ 
                      width: '100%',
                      height: '100%',
                      objectFit: 'contain'
                    }} 
                  />
                ) : (
                  <video 
                    src={mediaFile} 
                    controls 
                    style={{ 
                      width: '100%',
                      maxHeight: '300px'
                    }}
                  />
                )}
                <Box
                  onClick={handleRemoveMedia}
                  sx={{
                    position: 'absolute',
                    top: 8,
                    right: 8,
                    backgroundColor: 'rgba(0, 0, 0, 0.6)',
                    borderRadius: '50%',
                    width: 24,
                    height: 24,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer'
                  }}
                >
                  <ClearIcon sx={{ color: 'white', fontSize: 18 }} />
                </Box>
              </Box>
            )}

            <input
              type="file"
              ref={fileInputRef}
              style={{ display: 'none' }}
              onChange={handleFileChange}
            />

            <ActionsWrapper>
              <ActionGroup>
                <IconTextGroup onClick={() => handleMediaClick('image')}>
                  <IconWrapper>
                    <ImageIcon />
                  </IconWrapper>
                  <ActionText>
                    <Typography>Image</Typography>
                  </ActionText>
                </IconTextGroup>

                <IconTextGroup onClick={() => handleMediaClick('video')}>
                  <IconWrapper>
                    <VideocamIcon />
                  </IconWrapper>
                  <ActionText>
                    <Typography>Video</Typography>
                  </ActionText>
                </IconTextGroup>
              </ActionGroup>

              <PublishButton type="submit">
                Publier
              </PublishButton>
            </ActionsWrapper>
          </MainContent>
        </ContentWrapper>
      </form>
    </PostContainer>
  )
}

export default CreatePost
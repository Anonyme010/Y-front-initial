import { Box, Menu, MenuItem } from '@mui/material'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz'
import ThumbUpIcon from '@mui/icons-material/ThumbUp'
import CommentIcon from '@mui/icons-material/Comment'
import BookmarkIcon from '@mui/icons-material/Bookmark'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
import SendIcon from '@mui/icons-material/Send'
import { useState } from 'react'
import CommentsPopup from '../popups/CommentsPopup'
import { comments } from '../items/comments'
import {
  PostContainer,
  HeaderContainer,
  ProfileAvatar,
  UserInfoContainer,
  Username,
  UserHandle,
  TimeStamp,
  MoreButton,
  ContentSection,
  MainContent,
  ContentText,
  HashtagText,
  ImageContainer,
  CommentsSection,
  CommentsHeader,
  CommentDivider,
  CommentItem,
  CommentAvatar,
  CommentContent,
  CommentUsername,
  CommentText,
  CommentTime,
  ShowMoreText,
  ActionSection,
  ActionItem,
  CommentInputSection,
  CommentInputAvatar,
  CommentInputWrapper,
  CommentInput,
  SendButton
} from './PostCard.styles'

const PostCard = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [commentsOpen, setCommentsOpen] = useState(false);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleCommentsOpen = () => {
    setCommentsOpen(true);
  };

  const handleCommentsClose = () => {
    setCommentsOpen(false);
  };

  return (
    <PostContainer>
      <HeaderContainer>
        <ProfileAvatar src="/path-to-avatar.jpg" />
        <UserInfoContainer>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <Username>username</Username>
            <UserHandle>@username</UserHandle>
          </Box>
          <TimeStamp>il y'a 5 minutes</TimeStamp>
        </UserInfoContainer>
        <MoreButton
          onClick={handleClick}
          aria-controls={open ? 'post-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
        >
          <MoreHorizIcon />
        </MoreButton>
        <Menu
          id="post-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          onClick={handleClose}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
        >
          <MenuItem onClick={handleClose}>Modifier</MenuItem>
          <MenuItem onClick={handleClose}>Supprimer</MenuItem>
        </Menu>
      </HeaderContainer>

      <ContentSection>
        <MainContent>
          <ContentText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam et semper augue.
          </ContentText>

          <HashtagText>
            #nature <span>#beauty #voyage</span>
          </HashtagText>

          <ImageContainer 
            component="img"
            src="https://source.unsplash.com/random"
            alt="Post image"
          />
        </MainContent>

        <CommentsSection>
          <CommentsHeader>Commentaire ({comments.length})</CommentsHeader>
          <CommentDivider />
          
          {comments.slice(0, 3).map((comment) => (
            <CommentItem key={comment.id}>
              <CommentAvatar src={comment.avatar} />
              <CommentContent>
                <CommentUsername>{comment.username}</CommentUsername>
                <CommentText>{comment.comment}</CommentText>
                <CommentTime>{comment.time}</CommentTime>
              </CommentContent>
            </CommentItem>
          ))}

          <ShowMoreText onClick={handleCommentsOpen} sx={{ cursor: 'pointer' }}>
            voir tout
          </ShowMoreText>
        </CommentsSection>
      </ContentSection>

      <ActionSection>
        <ActionItem>
          <ThumbUpIcon />
          <span>15</span>
        </ActionItem>
        <ActionItem>
          <CommentIcon />
          <span>3</span>
        </ActionItem>
        <ActionItem>
          <BookmarkIcon />
          <span>3</span>
        </ActionItem>
      </ActionSection>

      <CommentInputSection>
        <CommentInputAvatar src="/path-to-avatar.jpg" />
        <CommentInputWrapper>
          <CommentInput placeholder="Écrire un commentaire..." />
          <SendButton>
            <SendIcon />
          </SendButton>
        </CommentInputWrapper>
      </CommentInputSection>
      <CommentsPopup 
        open={commentsOpen}
        onClose={handleCommentsClose}
      />
    </PostContainer>
  )
}

export default PostCard
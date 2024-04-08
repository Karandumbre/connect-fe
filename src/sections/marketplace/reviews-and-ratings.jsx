import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';

import { deepOrange } from '@mui/material/colors';
import {
  Box,
  Card,
  Avatar,
  Rating,
  Button,
  Dialog,
  TextField,
  Container,
  CardHeader,
  Typography,
  CardContent,
  DialogTitle,
  DialogContent,
  DialogActions,
} from '@mui/material';

WriteReview.propTypes = {
  open: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
};

function WriteReview({ open, handleClose }) {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');

  const handleRatingChange = (event, newValue) => {
    setRating(newValue);
  };

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  const handleSubmit = () => {
    // Implement submission logic here
    handleClose();
  };

  return (
    <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
      <DialogTitle id="form-dialog-title">Write a Review</DialogTitle>
      <DialogContent>
        <Rating name="simple-controlled" value={rating} onChange={handleRatingChange} />
        <TextField
          autoFocus
          margin="dense"
          id="comment"
          label="Your Comment"
          type="text"
          fullWidth
          multiline
          rows={4}
          value={comment}
          onChange={handleCommentChange}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button onClick={handleSubmit}>Submit</Button> {/* Implement submission logic */}
      </DialogActions>
    </Dialog>
  );
}

function RatingsReviews({ data: reviews }) {
  const [open, setOpen] = useState(false);
  const [overallRating, setOverallRating] = useState(0);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    // Optionally reset the form fields here
  };

  useEffect(() => {
    if (reviews.length === 0) {
      return;
    }
    // Calculate the average rating
    const totalRating = reviews.reduce((acc, review) => acc + review.rating, 0);
    const averageRating = reviews.length > 0 ? totalRating / reviews.length : 0;
    setOverallRating(averageRating);
  }, [reviews]);

  return (
    <Container sx={{ padding: [0] }}>
      <Box textAlign="center" marginBottom={4}>
        <Typography variant="h4" gutterBottom>
          Overall Ratings
        </Typography>
        <Rating name="read-only" value={overallRating} readOnly precision={0.1} />
        <Typography variant="subtitle1" gutterBottom>
          Based on {reviews.length} review{reviews.length > 1 ? 's' : ''}
        </Typography>
        <Button variant="contained" color="primary" onClick={handleClickOpen}>
          Write a review
        </Button>
      </Box>
      {reviews.map((review) => (
        <Card key={review.id} sx={{ marginBottom: 2 }}>
          <CardHeader
            avatar={
              <Avatar sx={{ bgcolor: deepOrange[500] }} alt={review.user} src={review.userImage}>
                {review.user[0]}
              </Avatar>
            }
            title={review.user}
            subheader={review.company}
          />
          <CardContent>
            <Rating name="read-only" value={review.rating} readOnly />
            <Typography variant="body1" gutterBottom>
              {review.comment}
            </Typography>
          </CardContent>
        </Card>
      ))}

      <WriteReview open={open} handleClose={handleClose} />
    </Container>
  );
}

RatingsReviews.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      user: PropTypes.string.isRequired,
      company: PropTypes.string.isRequired,
      rating: PropTypes.string.isRequired,
      comment: PropTypes.string.isRequired,
      userImage: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default RatingsReviews;

import * as React from 'react';
import PropTypes from 'prop-types';

import {
  Box,
  Card,
  Button,
  CardMedia,
  Typography,
  CardContent,
  ListSubheader,
} from '@mui/material';

import { SwipeableTextMobileStepper } from './slider';
import { SubCategoryListing } from './list-component';

export default function Portfolio({ data }) {
  return (
    data.length &&
    data.map(({ title, description, servicesUsed, imageUrls, caseStudyUrl, outcome }, index) => (
      <Card sx={{ display: 'flex', mb: 2, p: 1 }}>
        {imageUrls.length === 1 ? (
          <CardMedia
            component="img"
            sx={{ height: 200, width: 300, borderRadius: '16px' }}
            image={imageUrls[0]}
            alt={title}
          />
        ) : (
          <SwipeableTextMobileStepper images={imageUrls} />
        )}

        <CardContent
          sx={{
            display: 'flex',
            flexDirection: 'column',
            p: 0,
            pl: 1,
          }}
        >
          <Box display="flex" justifyContent="space-between">
            <Typography variant="h5" component="div">
              {title}
            </Typography>
            <Button
              disableRipple
              variant="body2"
              color="#000339"
              onClick={() => {
                window.open(caseStudyUrl, '_blank');
              }}
            >
              View case study
            </Button>
          </Box>

          <Typography variant="body2" color="#000339">
            {description}
          </Typography>
          <Box>
            <ListSubheader sx={{ lineHeight: '36px', padding: 0 }}>Services used</ListSubheader>
            <SubCategoryListing list={servicesUsed} name={`${title}-portfolio-${index}`} />
          </Box>
          <Typography variant="body2" color="#000339">
            {outcome}
          </Typography>
        </CardContent>
      </Card>
    ))
  );
}

Portfolio.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      servicesUsed: PropTypes.arrayOf(PropTypes.string),
      outcome: PropTypes.string.isRequired,
      imageUrls: PropTypes.arrayOf(PropTypes.string),
      caseStudyUrl: PropTypes.string.isRequired,
    })
  ).isRequired,
};

import React from 'react';
import PropTypes from 'prop-types';

import { X, Group, Facebook, LinkedIn, Instagram } from '@mui/icons-material'; // Social media icons

import {
  Grid,
  Link,
  List,
  ListItem,
  Container,
  Typography,
  ListItemIcon,
  ListItemText,
} from '@mui/material';

const mapNameWithSocialIcons = {
  Facebook: <Facebook />,
  Twitter: <X />,
  LinkedIn: <LinkedIn />,
  Instagram: <Instagram />,
};

function SocialProofPage({ memberships, socialMediaLinks }) {
  return (
    <Container maxWidth="lg" sx={{ padding: [0] }}>
      <Grid item xs={12} md={6}>
        <Typography variant="h4">Memberships</Typography>
        <List sx={{ padding: [0] }}>
          {memberships.map((membership, index) => (
            <ListItem key={index}>
              <ListItemIcon>
                <Group />
              </ListItemIcon>
              <ListItemText primary={membership} />
            </ListItem>
          ))}
        </List>
      </Grid>

      <Grid item xs={12} md={6}>
        <Typography variant="h4" gutterBottom>
          Follow Us
        </Typography>
        <List sx={{ display: 'flex' }}>
          {socialMediaLinks.map((link, index) => (
            <Link href={link.url} key={index} target="_blank" rel="noopener noreferrer">
              <ListItemIcon>{mapNameWithSocialIcons[link.name]}</ListItemIcon>
            </Link>
          ))}
        </List>
      </Grid>
    </Container>
  );
}

SocialProofPage.propTypes = {
  memberships: PropTypes.arrayOf(PropTypes.string).isRequired,
  socialMediaLinks: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
      icon: PropTypes.node.isRequired,
    })
  ).isRequired,
};

export default SocialProofPage;

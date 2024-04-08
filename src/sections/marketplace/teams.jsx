import React from 'react';
import PropTypes from 'prop-types';

import { StarBorder } from '@mui/icons-material'; // Icon for awards

import {
  Grid,
  Card,
  List,
  ListItem,
  CardMedia,
  Container,
  Typography,
  CardContent,
  ListItemIcon,
  ListItemText,
} from '@mui/material';

function TeamPage({ team, certificationsAwards }) {
  return (
    <Container maxWidth="lg" sx={{ padding: [0] }}>
      <Typography variant="h4" gutterBottom>
        Key Personnel
      </Typography>
      <Grid container spacing={4} marginTop={1}>
        {team.map((member) => (
          <Grid item xs={12} sm={6} md={4} key={member.id}>
            <Card raised sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
              <CardMedia component="img" height="140" image={member.imageUrl} alt={member.name} />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {member.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {member.role}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {member.experience}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
      <Typography variant="h4" gutterBottom sx={{ marginTop: 4 }}>
        Certifications and Awards
      </Typography>
      <List>
        {certificationsAwards.map((award, index) => (
          <ListItem key={index}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary={award} />
          </ListItem>
        ))}
      </List>
    </Container>
  );
}

TeamPage.propTypes = {
  team: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      role: PropTypes.string.isRequired,
      experience: PropTypes.string.isRequired,
      imageUrl: PropTypes.string.isRequired,
    })
  ).isRequired,
  certificationsAwards: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default TeamPage;

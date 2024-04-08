import React from 'react';
import PropTypes from 'prop-types';

import { Grid, Card, Container, Typography, CardContent } from '@mui/material';

function Pricing({ pricing }) {
  return (
    <Container maxWidth="lg" sx={{ marginTop: 0, padding: [0] }}>
      <Typography variant="p" align="left" sx={{ marginBottom: 0 }}>
        Take a look at our general pricing framework to get an idea of our services. For specific
        and customized pricing, please submit your project proposal. We&apos;ll review your needs
        and get back to you with a personalized quote tailored to your project.
      </Typography>
      <Grid container spacing={4}>
        {pricing.map((plan) => (
          <Grid item xs={12} sm={6} md={4} key={plan.id}>
            <Card raised sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
              <CardContent sx={{ padding: [3] }}>
                <Typography variant="h5" component="h2" gutterBottom>
                  {plan.title}
                </Typography>
                <Typography variant="h6" gutterBottom>
                  {plan.price}
                </Typography>
                <Typography variant="body1" sx={{ mb: 2 }}>
                  {plan.description}
                </Typography>
                <Typography variant="body2" component="ul">
                  {plan.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
      <Typography variant="body1" align="left" sx={{ marginY: 2 }}>
        We understand every project is unique. Contact us to discuss your specific requirements and
        to get a custom quote tailored to your needs.
      </Typography>
    </Container>
  );
}

Pricing.propTypes = {
  pricing: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      price: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      features: PropTypes.arrayOf(PropTypes.string).isRequired,
    })
  ).isRequired,
};

export default Pricing;

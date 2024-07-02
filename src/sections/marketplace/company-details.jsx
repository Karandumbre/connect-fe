import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';

import { useResponsive } from 'src/hooks/use-responsive'; // Assuming this is the correct import path
import { TabList, TabPanel, TabContext } from '@mui/lab';
import { ArrowForwardRounded } from '@mui/icons-material';
import {
  Box,
  Tab,
  Stack,
  Button,
  MenuItem,
  Accordion,
  Typography,
  FormControl,
  AccordionDetails,
  AccordionSummary,
} from '@mui/material';

import { getData } from 'src/routes/api';

import { CustomTextField as TextField } from 'src/pages/settings/label';

import TeamPage from './teams';
import Portfolio from './portfolio';
import SocialProofPage from './social';
import SendProposal from './send-proposal';
import Pricing from './pricing-information';
import ListCompanyService from './list-component';
import RatingsReviews from './reviews-and-ratings';
// ----------------------------------------------------------------------

function LabTabs({ isMobile }) {
  const [value, setValue] = useState('1');
  const [tabData, setTabData] = useState([]);
  const [error, setError] = useState(null);

  const getSellerData = async () => {
    try {
      const response = await getData('api/v1/seller/1');
      const { data } = response;

      const updated = [
        { label: 'Services Offered', component: <ListCompanyService data={data.services} /> },
        { label: 'Portfolio and Case Studies', component: <Portfolio data={data.portfolio} /> },
        { label: 'Ratings and Review', component: <RatingsReviews data={data.ratings} /> },
        { label: 'Pricing Information', component: <Pricing pricing={data.pricing} /> },
        {
          label: 'Team and Expertise',
          component: <TeamPage team={data.team} certificationsAwards={data.certificationsAwards} />,
        },
        {
          label: 'Social Proof and Associations',
          component: (
            <SocialProofPage
              memberships={data.memberships}
              socialMediaLinks={data.socialMediaLinks}
            />
          ),
        },
      ];

      setTabData(updated);
    } catch {
      console.log('Error fetching data');
      setError('Error fetching data');
    }
  };

  useEffect(() => {
    getSellerData();
  }, []);
  const handleChange = (event, newValue) => {
    if (isMobile) {
      setValue(event.target.value);
    } else {
      setValue(newValue);
    }
  };

  return (
    <Box sx={{ width: '100%', typography: 'body1' }}>
      {tabData.length ? (
        <TabContext value={value}>
          {isMobile ? (
            <Box>
              <FormControl fullWidth>
                <TextField
                  select
                  value={value}
                  onChange={handleChange}
                  displayEmpty
                  inputProps={{ 'aria-label': 'Without label' }}
                >
                  {tabData.map((tab, index) => (
                    <MenuItem key={index} value={(index + 1).toString()}>
                      {tab.label}
                    </MenuItem>
                  ))}
                </TextField>
              </FormControl>
              <TabPanel sx={{ padding: 0 }} value={value}>
                {tabData[parseInt(value, 10) - 1].component}
              </TabPanel>
            </Box>
          ) : (
            <>
              <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <TabList onChange={handleChange} aria-label="lab API tabs example">
                  {tabData.map((tab, index) => (
                    <Tab key={index} label={tab.label} value={(index + 1).toString()} />
                  ))}
                </TabList>
              </Box>
              {tabData.map((tab, index) => (
                <TabPanel key={index} value={(index + 1).toString()}>
                  {tab.component}
                </TabPanel>
              ))}
            </>
          )}
        </TabContext>
      ) : (
        <></>
      )}
    </Box>
  );
}

LabTabs.propTypes = {
  isMobile: PropTypes.bool,
};

export default function CompanyDetails({
  title,
  description,
  src,
  color = 'primary',
  sx,
  ...other
}) {
  const [openProposalModal, setOpenProposalModal] = useState(false);
  const isMobile = useResponsive('down', 'sm'); // Using the custom hook
  const isDesktop = !isMobile;

  const handleOpenProposalModalState = () => setOpenProposalModal(true);
  const handleCloseProposalModalState = () => setOpenProposalModal(false);

  return (
    <>
      <Accordion>
        <AccordionSummary
          sx={{
            px: 3,
            borderRadius: 2,
            '& .MuiAccordionSummary-content': {
              margin: '0 !important',
              py: 2,
            },
            ...(isMobile && {
              '& .MuiAccordionSummary-content': {
                flexDirection: 'column',
                alignItems: 'flex-start',
              },
            }),
            ...sx,
          }}
        >
          <Stack
            spacing={3}
            {...other}
            direction={{ xs: 'column', sm: 'row' }}
            justifyContent="space-between"
            alignItems={{ xs: 'flex-start', sm: 'center' }}
            sx={{ width: '100%', margin: 0 }}
            {...other}
          >
            {isMobile && (
              <>
                <Box display="flex" gap="16px">
                  <img style={{ width: 64, height: 64 }} src={src} alt="company" />
                  <Stack spacing={0.5} direction="column" width={['100%']}>
                    <Typography variant="h4" lineHeight="normal">
                      {title}
                    </Typography>
                    <Button
                      fullWidth
                      disableRipple
                      variant="contained"
                      onClick={(e) => {
                        handleOpenProposalModalState();
                        e.stopPropagation();
                      }}
                    >
                      Send proposal <ArrowForwardRounded sx={{ ml: 3 }} />
                    </Button>
                  </Stack>
                </Box>
                <Typography
                  sx={{
                    color: 'text.disabled',
                    fontSize: '1rem !important',
                    mt: '1rem !important',
                  }}
                  variant="subtitle2"
                  textAlign="justify"
                >
                  {description}
                </Typography>
              </>
            )}
            {isDesktop && (
              <>
                <img style={{ width: 64, height: 64 }} src={src} alt="company" />
                <Stack spacing={0.5} direction="row" width={['70%']}>
                  <Box>
                    <Typography variant="h4">{title}</Typography>
                    <Typography
                      sx={{ color: 'text.disabled', fontSize: '1rem !important' }}
                      variant="subtitle2"
                      textAlign="justify"
                    >
                      {description}
                    </Typography>
                  </Box>
                </Stack>

                <Box display="flex" alignItems="center">
                  <Button
                    fullWidth
                    disableRipple
                    variant="contained"
                    onClick={(e) => {
                      handleOpenProposalModalState();
                      e.stopPropagation();
                    }}
                  >
                    Send proposal <ArrowForwardRounded sx={{ ml: 3 }} />
                  </Button>
                </Box>
              </>
            )}
          </Stack>
        </AccordionSummary>
        <AccordionDetails
          sx={{
            pt: 0,
          }}
        >
          <Typography variant="body2">
            <LabTabs isMobile={isMobile} />
          </Typography>
        </AccordionDetails>
      </Accordion>
      <SendProposal open={openProposalModal} handleClose={handleCloseProposalModalState} />
    </>
  );
}

CompanyDetails.propTypes = {
  color: PropTypes.string,
  src: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
  sx: PropTypes.object,
  title: PropTypes.string,
  description: PropTypes.string,
};

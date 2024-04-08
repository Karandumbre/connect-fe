import { useState } from 'react';
import PropTypes from 'prop-types';

import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { TabList, TabPanel, TabContext } from '@mui/lab';
import { ArrowForwardRounded } from '@mui/icons-material';
import {
  Box,
  Tab,
  Stack,
  Button,
  Accordion,
  Typography,
  AccordionDetails,
  AccordionSummary,
} from '@mui/material';

import { data } from 'src/_mock/company-details';

import TeamPage from './teams';
import Portfolio from './portfolio';
import SocialProofPage from './social';
import SendProposal from './send-proposal';
import Pricing from './pricing-information';
import ListCompanyService from './list-component';
import RatingsReviews from './reviews-and-ratings';
// ----------------------------------------------------------------------

function LabTabs() {
  const [value, setValue] = useState('1');
  const handleChange = (event, newValue) => setValue(newValue);

  return (
    <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="Services Offered" value="1" />
            <Tab label="Portfolio and Case Studies" value="2" />
            <Tab label="Ratings and Review" value="3" />
            <Tab label="Pricing Information" value="4" />
            <Tab label="Team and Expertise" value="5" />
            <Tab label="Social Proof and Associations" value="8" />\{' '}
          </TabList>
        </Box>
        <TabPanel value="1">
          <ListCompanyService data={data.services} />
        </TabPanel>
        <TabPanel value="2">
          <Portfolio data={data.portfolio} />
        </TabPanel>
        <TabPanel value="3">
          <RatingsReviews data={data.ratings} />
        </TabPanel>
        <TabPanel value="4">
          <Pricing pricing={data.pricing} />
        </TabPanel>
        <TabPanel value="5">
          <TeamPage team={data.team} certificationsAwards={data.certificationsAwards} />
        </TabPanel>
        <TabPanel value="8">
          <SocialProofPage
            memberships={data.memberships}
            socialMediaLinks={data.socialMediaLinks}
          />
        </TabPanel>
      </TabContext>
    </Box>
  );
}
export default function CompanyDetails({
  title,
  description,
  src,
  color = 'primary',
  sx,
  ...other
}) {
  const [openProposalModal, setOpenProposalModal] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
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
            <LabTabs />
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

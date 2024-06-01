import React from 'react';

import { Box } from '@mui/material';

import CompanyDetails from 'src/sections/marketplace/company-details';

import { RequestDialog } from './request';

export default function MarketPlaceView() {
  return (
    <Box>
      <RequestDialog />
      <CompanyDetails
        src="/assets/microsoft.png"
        title="Microsoft"
        description="Microsoft is the largest vendor of computer software in the world. It is also a leading provider of cloud computing services, video games, computer and gaming hardware, search and other online services. Microsoft's corporate headquarters is located in Redmond, Wash., and it has offices in more than 60 countries."
        id={1387678987}
      />
    </Box>
  );
}

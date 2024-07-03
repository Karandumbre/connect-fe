import { useState, useEffect } from 'react';

import { Box } from '@mui/material';

import { getData } from 'src/routes/api';

import CompanyDetails from 'src/sections/marketplace/company-details';

import { ErrorComponent } from './error';
import { RequestDialog } from './request';

export default function MarketPlaceView() {
  const [companyDetails, setCompanyDetails] = useState([]);
  const [error, setError] = useState(null);

  const getAllCompanies = async () => {
    try {
      const { data } = await getData('api/v1/companies/');
      setError(null);
      setCompanyDetails(data);
    } catch (e) {
      setError('Error fetching data');
    }
  };

  useEffect(() => {
    getAllCompanies();
  }, []);

  if (error) {
    return <ErrorComponent message={error} />;
  }
  return (
    <Box>
      <RequestDialog />
      {companyDetails.length ? (
        companyDetails.map((company, key) => (
          <CompanyDetails
            key={company.name + key}
            src={`/assets/${company.name}.png`}
            title={company.name}
            description={company.description}
            id={1387678987}
          />
        ))
      ) : (
        <>No companies available, please change the search</>
      )}
    </Box>
  );
}

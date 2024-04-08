import { Helmet } from 'react-helmet-async';

import MarketPlaceView from 'src/sections/marketplace';

// ----------------------------------------------------------------------

export default function Marketplace() {
  return (
    <>
      <Helmet>
        <title> Market place</title>
      </Helmet>

      <MarketPlaceView />
    </>
  );
}

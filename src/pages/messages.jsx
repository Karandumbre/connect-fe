import { Helmet } from 'react-helmet-async';

import { Message } from 'src/sections/message';

// ----------------------------------------------------------------------

export default function MessagePage() {
  return (
    <>
      <Helmet>
        <title> Evermont chat </title>
      </Helmet>

      <Message />
    </>
  );
}

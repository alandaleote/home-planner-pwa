import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';

import HomeTabs from './pages/HomeTabs';

function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm">
        <HomeTabs />
      </Container>
    </React.Fragment>

  );
}

export default App;

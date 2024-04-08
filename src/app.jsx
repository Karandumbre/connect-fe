import { Provider } from 'react-redux';
import { SnackbarProvider } from 'notistack';

import Router from 'src/routes/sections';

import { useScrollToTop } from 'src/hooks/use-scroll-to-top';

import 'src/global.css';
import { store } from 'src/store';
import { ThemeProvider } from 'src/theme';

// ----------------------------------------------------------------------

export const App = () => {
  useScrollToTop();

  return (
    <Provider store={store}>
      <ThemeProvider>
        <SnackbarProvider maxSnack={3}>
          <Router />
        </SnackbarProvider>
      </ThemeProvider>
    </Provider>
  );
};

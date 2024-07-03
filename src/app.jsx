import { Provider } from 'react-redux';
import { SnackbarProvider } from 'notistack';

import { useScrollToTop } from 'src/hooks/use-scroll-to-top';

import Router from 'src/routes';
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

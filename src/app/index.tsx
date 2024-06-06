import { ErrorBoundaryProvider } from './providers/errorBoundary';
import { AppRouter } from './providers/routerProvider';

const App = () => {
  return (
    <ErrorBoundaryProvider>
      <AppRouter />
    </ErrorBoundaryProvider>
  );
};

export default App;

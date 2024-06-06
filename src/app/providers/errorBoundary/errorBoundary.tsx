import { ErrorBoundary } from 'react-error-boundary';

export const ErrorBoundaryProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return <ErrorBoundary fallback={<div>error</div>}>{children}</ErrorBoundary>;
};

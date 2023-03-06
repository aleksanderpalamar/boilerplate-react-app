import React, { useState } from 'react';

interface Props {
  children: React.ReactNode;
}

export function ErrorBoundary({ children }: Props) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return <div>Something went wrong!</div>;
  }

  return (
    <React.Fragment>
      {children}
    </React.Fragment>
  );
}

export default ErrorBoundary;
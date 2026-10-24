import { isRouteErrorResponse, useRouteError } from 'react-router';
import { Button } from '../shared/components/Button';
import { Container } from '../shared/components/Container';

export const RouteError = () => {
  const error = useRouteError();

  const message = isRouteErrorResponse(error)
    ? `${error.status} ${error.statusText}`
    : error instanceof Error
      ? error.message
      : 'Something went wrong.';

  return (
    <Container className="flex min-h-svh flex-col justify-center py-24">
      <p className="font-mono text-xs uppercase tracking-[0.18em] text-primary">
        Error
      </p>
      <h1 className="mt-4 text-5xl font-extrabold tracking-tighter md:text-7xl">
        Something broke.
      </h1>
      <p className="mt-4 max-w-lg text-lg text-font-muted">
        The page could not load. This is usually a stale build or a network
        hiccup. Reloading normally fixes it.
      </p>
      {import.meta.env.DEV && (
        <p className="mt-4 max-w-lg break-words font-mono text-xs text-font-light">
          {message}
        </p>
      )}
      <div className="mt-8 flex flex-wrap gap-3">
        <Button href="/" variant="solid" magnetic>
          Back home
        </Button>
        <button
          type="button"
          onClick={() => window.location.reload()}
          className="inline-flex min-h-11 items-center rounded-full border border-font/30 px-6 py-3 text-sm font-semibold text-font transition-colors duration-300 hover:bg-font hover:text-background"
        >
          Reload page
        </button>
      </div>
    </Container>
  );
};

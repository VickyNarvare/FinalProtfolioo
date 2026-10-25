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
      <h1 className="mt-4 text-5xl font-medium tracking-[-0.02em] md:text-7xl">
        Something broke.
      </h1>
      <p className="mt-4 max-w-lg text-lg text-font-muted">
        The page couldn&apos;t load. This is usually a stale build or a brief
        network issue — reloading normally fixes it.
      </p>
      {import.meta.env.DEV && (
        <p className="mt-4 max-w-lg wrap-break-words font-mono text-xs text-font-light">
          {message}
        </p>
      )}
      <div className="mt-8 flex flex-wrap gap-3">
        <Button href="/" variant="solid">
          Back to home
        </Button>
        <button
          type="button"
          onClick={() => window.location.reload()}
          className="inline-flex min-h-11 items-center justify-center rounded-lg border border-border bg-background-card px-5 py-3 font-mono text-[11px] font-semibold uppercase tracking-[0.14em] text-font shadow-sm transition-[background-color,border-color,color,box-shadow,transform] duration-300 ease-out hover:-translate-y-0.5 hover:border-primary/60 hover:bg-primary/10 hover:text-primary hover:shadow-lg hover:shadow-primary/15 active:translate-y-0"
        >
          Reload page
        </button>
      </div>
    </Container>
  );
};

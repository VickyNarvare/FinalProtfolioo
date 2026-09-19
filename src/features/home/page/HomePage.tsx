export const HomePage = () => {
  return (
    <section className="min-h-screen bg-background px-6 py-20 text-font">
      <div className="mx-auto max-w-5xl">
        <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-primary">
          Welcome
        </p>
        <h1 className="text-4xl font-bold md:text-6xl">Home</h1>
        <p className="mt-6 max-w-2xl text-lg text-font-muted">
          This is the home page for your portfolio.
        </p>
      </div>
      <div className={"h-screen bg-background-secondary"}></div>
    </section>
  );
};

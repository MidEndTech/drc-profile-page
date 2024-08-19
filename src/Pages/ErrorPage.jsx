function ErrorPage() {
  return (
    <div dir="ltr" className="overflow-hidden">
      <div className="w-screen h-screen flex flex-col items-center justify-center">
        <h2 className="text-6xl font-bold bg-gradient-to-l from-primary to-secondary text-transparent bg-clip-text">
          Oops...
        </h2>
        <h1 className="text-7xl font-bold bg-gradient-to-l from-primary to-secondary text-transparent bg-clip-text">
          Error 404
        </h1>
        <h3 className="text-6xl font-bold bg-gradient-to-l from-primary to-secondary text-transparent bg-clip-text">
          Not Found
        </h3>
      </div>
    </div>
  );
}

export default ErrorPage;

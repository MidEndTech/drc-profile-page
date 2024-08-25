// eslint-disable-next-line react/prop-types
export default function Heading({ className, children }) {
  return (
    <h1
      className={`text-xl font-bold pb-3 sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl ${className}`}
    >
      {children}
    </h1>
  );
}

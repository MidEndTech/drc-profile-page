// eslint-disable-next-line react/prop-types
export default function Heading({ className, children }) {
  return (
    <h1
      className={`text-lg font-bold pb-3 sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl ${className}`}
    >
      {children}
    </h1>
  );
}

// eslint-disable-next-line react/prop-types
export default function Paragraph({ className, children }) {
  return (
    <p
      className={`ّ text-base md:text-lg lg:text-xl xl:text-2xl leading-8 xl:leading-10 ${className}`}
    >
      {children}
    </p>
  );
}

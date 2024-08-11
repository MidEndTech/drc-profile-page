// eslint-disable-next-line react/prop-types
export default function Paragraph({ className, children }) {
  return (
    <p
      className={`ّtext-sm md:text-md lg:text-lg xl:text-xl leading-8 xl:leading-10 ${className}`}
    >
      {children}
    </p>
  );
}

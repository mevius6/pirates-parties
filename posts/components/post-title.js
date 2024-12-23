export default function PostTitle({ children }) {
  return (
    <h1 className="text-6xl md:text-7xl lg:text-8xl leading-tight md:leading-none mb-12 text-left">
      {children}
    </h1>
  );
}

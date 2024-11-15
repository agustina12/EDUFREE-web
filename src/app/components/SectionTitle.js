export default function SectionTitle({ className, children, variant }) {
  const addClassName = className ? `${className}` : "";
  const variants = {
    "text-2xl": "text-2xl uppercase font-semibold",
    "text-2xll": "text-2xl font-normal mt-6",
    "text-3xl": "text-3xl font-semibold tracking-wide",
    "text-4xl": "text-4xl tracking-wide font-semibold leading-normal",
    "text-5xl": "text-5xl leading-normal font-semibold",
  };

  const pickedVariant = variants[variant];

  return (
    <h1 className={` text-gray-900 ${pickedVariant}${addClassName}`}>
      {children}
    </h1>
  );
}

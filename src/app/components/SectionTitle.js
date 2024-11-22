export default function SectionTitle({ className, children, variant }) {
  const addClassName = className ? `${className}` : "";
  const variants = {
    "text-2xl": "text-2xl uppercase font-semibold text-gray-900",
    "text-2xxl": "text-2xl font-semibold text-blue-600",
    "text-2xll": "text-2xl font-normal mt-6 text-gray-900",
    "text-2xxll": "text-2xl font-semibold text-white",
    "text-3xl": "text-3xl font-semibold tracking-wide text-gray-900",
    "text-4xl":
      "text-4xl tracking-wide font-semibold leading-normal text-gray-900",
    "text-4xll": "text-4xl leading-normal font-semibold text-white",
    "text-5xl": "text-5xl leading-normal font-semibold text-gray-900",
  };

  const pickedVariant = variants[variant];

  return <h1 className={`${pickedVariant}${addClassName}`}>{children}</h1>;
}

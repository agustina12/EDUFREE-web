export default function SectionParagraph({ className, children, variant }) {
  const addClassName = className ? `${className}` : "";
  const variants = {
    "text-xs": "text-xs text-indigo-950",
    "text-base": "text-base text-gray-400 mt-3 leading-relaxed",
    "text-lg": "text-lg tracking-wide text-gray-500",
    "text-lg2": "text-lg tracking-wide text-indigo-950",
    "text-2xl": "text-2xl tracking-wide text-indigo-950 leading-relaxed",
  };
  const pickedVariant = variants[variant];

  return (
    <p className={`font-normal  ${pickedVariant}${addClassName}`}>{children}</p>
  );
}

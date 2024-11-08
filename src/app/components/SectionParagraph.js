export default function SectionParagraph({ className, children, variant }) {
  const addClassName = className ? `${className}` : "";
  const variants = {
    "text-base": "text-base text-gray-400 mt-3 leading-relaxed",
    "text-lg": "text-lg tracking-wide text-gray-500",
  };
  const pickedVariant = variants[variant];

  return (
    <p className={`font-normal  ${pickedVariant}${addClassName}`}>{children}</p>
  );
}

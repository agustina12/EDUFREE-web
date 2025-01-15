export default function SectionParagraph({ className, children, variant }) {
  const addClassName = className ? `${className}` : "";
  const variants = {
    "text-xs": "text-xs text-indigo-950 font-normal",
    "text-basee": "text-base text-indigo-950 font-normal",
    "footer-font": "text-base text-indigo-950  font-semibold",
    "footer-title": "text-base white font-medium",
    "text-base": "text-base text-gray-400 mt-3 leading-relaxed font-normal",
    "var-text-base": "text-base text-white font-light",
    "text-lg": "text-lg tracking-wide text-gray-500 font-normal",
    "text-lg2": "text-lg tracking-wide text-indigo-950 font-normal",
    "text-2xl":
      "text-2xl tracking-wide text-indigo-950 leading-relaxed font-normal",
  };
  const pickedVariant = variants[variant];

  return <p className={`${pickedVariant}${addClassName}`}>{children}</p>;
}

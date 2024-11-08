export default function Button({ className, children, variant }) {
  const addClassName = className ? `${className}` : "";
  const variants = {
    "outline-white": `border border-white text-white hover:border-yellow-300 hover:text-yellow-300`,
    "btn-yellow": `bg-amber-200 text-indigo-950 hover:bg-amber-300`,
    "btn-transparent": `bg-transparent text-indigo-950`,
  };

  const pickedVariant = variants[variant];

  return (
    <div className="">
      <a
        href="#"
        className={`rounded py-2 px-5 text-base font-normal w-auto ${pickedVariant}${addClassName}`}>
        {children}
      </a>
    </div>
  );
}

export default function Button({ className, children, variant }) {
  const addClassName = className ? `${className}` : "";
  const variants = {
    "outline-white": `border border-white text-white hover:border-yellow-300 hover:text-yellow-300 font-normal w-auto`,
    "btn-yellow": `bg-amber-200 text-indigo-950 hover:bg-amber-300 font-normal w-auto`,
    "btn-yellow-bold": `bg-amber-200 text-indigo-950 hover:bg-amber-300 font-bold`,
    "btn-transparent": `bg-transparent text-indigo-950 font-normal w-auto`,
  };

  const pickedVariant = variants[variant];

  return (
    <div className="">
      <a
        href="#"
        className={`rounded py-2 px-5 text-base ${pickedVariant}${addClassName}`}
      >
        {children}
      </a>
    </div>
  );
}

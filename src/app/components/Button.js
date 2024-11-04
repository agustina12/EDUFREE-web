export default function Button({ className, children, variant }) {
  const addClassName = className ? `${className}` : "";
  const variants = {
    "outline-white": `border border-white text-white`,
    "btn-yellow": `bg-yellow-500 text-indigo-950`,
  };

  const pickedVariant = variants[variant];

  return (
    <div className="">
      <a
        href="#"
        className={`rounded py-2 px-5 text-base font-normal ${pickedVariant}${addClassName}`}>
        {children}
      </a>
    </div>
  );
}

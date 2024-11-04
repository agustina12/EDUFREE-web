export default function NavItem({ children }) {
  return (
    <li>
      <a href="#" className="text-white text-base uppercase font-light">
        {children}
      </a>
    </li>
  );
}

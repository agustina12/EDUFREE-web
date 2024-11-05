import NavItem from "./NavItem";
export default function Nav() {
  return (
    <div className="px-8">
      <ul className="flex justify-between space-x-10">
        <NavItem>home</NavItem>
        <NavItem>tentang kami</NavItem>
        <NavItem>kursus</NavItem>
        <NavItem>faq</NavItem>
        <NavItem>blog</NavItem>
      </ul>
    </div>
  );
}

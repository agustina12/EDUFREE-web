import Nav from "./Nav";
import Logo from "./Logo";
import Button from "./Button";
export default function Navbar() {
  return (
    <div className="mx-16 flex items-center py-5 h-20">
      <div className="w-2/5">
        <Logo />
      </div>
      <div className="w-3/5">
        <div className="flex items-center justify-end">
          <Nav />
          <Button variant="outline-white">Login</Button>
        </div>
      </div>
    </div>
  );
}

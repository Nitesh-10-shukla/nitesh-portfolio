import Link from "next/link";

const navLinks = [
  { href: "/#about", label: "ABOUT" },
  { href: "/#experience", label: "EXPERIENCE" },
  { href: "/#skills", label: "SKILLS" },
  { href: "/#education", label: "EDUCATION" },
  { href: "/resume", label: "BLOGS" },
  { href: "/#projects", label: "PROJECTS" },
];

function Navbar() {
  return (
    <nav className="bg-transparent">
      <div className="flex items-center justify-between py-5">
        <div className="flex flex-shrink-0 items-center">
          <Link href="/" className="text-[#16f2b3] text-3xl font-bold">
            Nitesh Shukla
          </Link>
        </div>
        <ul
          id="navbar-default"
          className="mt-4 flex h-screen max-h-0 w-full flex-col items-start text-sm opacity-0 
                     md:mt-0 md:h-auto md:max-h-screen md:w-auto md:flex-row md:space-x-1 md:border-0 md:opacity-100"
        >
          {navLinks.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className="block px-4 py-2 no-underline outline-none hover:no-underline"
              >
                <span className="text-sm text-white transition-colors duration-300 hover:text-pink-600">
                  {label}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
import Link from "next/link";
import Image from "next/image";
import { NAV_LINKS } from "@/constants";
import Button from "./Button";

const Navbar = () => {
  return (
    <nav className="relative z-30 py-5 flexBetween max-container padding-container">
      <Link href="/">
        <Image src="/hilink-logo.svg" alt="logo" width={74} height={29} />
      </Link>
      <ul className="hidden h-full gap-12 lg:flex">
        {NAV_LINKS.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              key={link.key}
              className="regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
      <div className="lg:flexCenter hidden">
        <Button
          title="Login"
          type="button"
          icon="/user.svg"
          varient="btn_dark_green"
        />
      </div>

      <Image
        src="/menu.svg"
        alt="menu"
        width={20}
        height={20}
        className="inline-block cursor-pointer lg:hidden"
      />
    </nav>
  );
};

export default Navbar;

import Link from "next/link";
import Image from "next/image";
import localFont from "next/font/local";

// import { cn } from "@/lib/utils";

// Define the font with correct path
const headingFont = localFont({
  src: "../public/fonts/font.woff2",
});

export const Logo = () => {
  return (
    <Link href="https://kogenie.com">
      <div className="hover:opacity-75 transition items-center gap-x-2 hidden md:flex">
        <Image
          src="/logo_012.svg"
          alt="Kogenie Logo"
          height={30} // Ensure height is set to avoid errors
          width={30}  // Ensure width is set as required
          priority={true} // Optional: Improves loading for the logo
        />
      </div>
    </Link>
  );
};

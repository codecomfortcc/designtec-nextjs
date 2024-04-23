import Link from "next/link";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";
import { ClerkLoading, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { Skeleton } from "../ui/skeleton";
import { title } from "process";

import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

export const navLinks = [
  { id: 1, title: "Home", path: "/" },
  { id: 2, title: "About", path: "/about" },
  { id: 3, title: "Services", path: "/services" },
  { id: 4, title: "Products", path: "/products" },
  { id: 5, title: "Contact", path: "/contact" },
];

const NavbarDesktop = () => {
  const pathname = usePathname();

  return (
    <div className="flex items-center gap-x-5">
      <div className="flex gap-4 items-center ">
        {navLinks.map((link) => (
          <Link
            href={link.path}
            key={link.id}
            className={cn(
              "hover:text-blue-500 cursor-pointer select-none transition-all duration-200 pl-0.5 ease-in-out active:text-blue-800 ",
              pathname === link.path ? "text-primary font-semibold" : ""
            )}
          >
            {link.title}
          </Link>
        ))}
      </div>
      <Separator orientation="vertical" className="h-7" />
      <div className="gap-x-2 flex ">
        <SignedIn>
          <ClerkLoading>
            <Skeleton className="w-[40px] h-[40px] rounded-full " />
          </ClerkLoading>
          <UserButton
            appearance={{
              elements: {
                avatarBox: {
                  width: "40px",
                  height: "40px",
                },
              },
            }}
          />
        </SignedIn>
        <SignedOut>
          <Link href="/sign-in">
            <Button
              variant="outline"
              className="text-primary border-2 border-primary  bg-transparent hover:bg-primary hover:text-white"
            >
              Login
            </Button>
          </Link>
          <Link href="/sign-up">
            <Button>Sign Up</Button>
          </Link>
        </SignedOut>
      </div>
    </div>
  );
};

export default NavbarDesktop;

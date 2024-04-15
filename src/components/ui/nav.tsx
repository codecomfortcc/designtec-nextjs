import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { TooltipProvider } from "@radix-ui/react-tooltip";
import Link from "next/link";

interface NavProps {
  isCollapsed: boolean;
  links: {
    title: string;
    label?: string;
    icon: LucideIcon;

    href: string;
  }[];
}

export function Nav({ links, isCollapsed }: NavProps) {
  return (
    <TooltipProvider>
      <div
        data-collapsed={isCollapsed}
        className="group flex flex-col gap-4 py-2  data-[collapsed=true]:py-2"
      >
        <nav className="grid gap-2 w group-[[data-collapsed=true]]:justify-center group-[[data-collapsed=true]]:px-2 ">
          {links.map((link, index) =>
            isCollapsed ? (
              <Tooltip key={index} delayDuration={0}>
                <TooltipTrigger asChild>
                  <Link
                    href={link.href}
                    className={" px-4 py-2 w-full text-gray-500"}
                  >
                    <link.icon className="h-5 w-5" />
                    <span className="sr-only">{link.title}</span>
                  </Link>
                </TooltipTrigger>
                <TooltipContent
                  side="right"
                  className="flex items-center w-full gap-4"
                >
                  {link.title}
                  {link.label && (
                    <span className="ml-auto text-muted-foreground">
                      {link.label}
                    </span>
                  )}
                </TooltipContent>
              </Tooltip>
            ) : (
              <Link
                key={index}
                href={link.href}
                className={cn(
                  " flex text-center items-center gap-3 hover:bg-sky-50/50 px-4 py-2 font-semibold bg-transparent  rounded-md text-gray-500"
                )}
              >
                <link.icon className="h-5 w-5" />
                {link.title}
                {link.label && <span className="">{link.label}</span>}
              </Link>
            )
          )}
        </nav>
      </div>
    </TooltipProvider>
  );
}

// import { cn } from "@/lib/utils";
// import { BaggageClaim, BarChart, ChevronRight, LayoutDashboard, MessageCircle, Settings, Users2 } from "lucide-react";
// import { useState } from "react";
// import { NavLink, useParams } from "react-router-dom";
// import { useWindowWidth } from "@react-hook/window-size";
// import { Button } from "../ui/button";
// interface NavLinksProps {
//   location: string;
//   placeholder: string;
//   className?: string;
//   icon?: React.ReactNode;
// }
// const NavLinksGenerator = ({
//   location,
//   placeholder,
//   className,
//   icon,
// }: NavLinksProps) =>
// {
//   return (
//     <NavLink
//       to={`${location}`}
//       className={cn(
//         "text-center block font-semibold bg-transparent px-2 py-2 rounded-md text-gray-500",
//         { className }
//       )}
//     >
//       <p className="flex justify-center items-center gap-3">
//         <span className="">{icon}</span>
//         <span className=""> {placeholder}</span>
//       </p>
//     </NavLink>
//   );
// };
// const Sidebar = () => {
//   const params = useParams();
//   const [isCollapsed, setIsCollapsed] = useState(false);

//   const onlyWidth = useWindowWidth();
//   const mobileWidth = onlyWidth < 768;

//   function toggleSidebar() {
//     setIsCollapsed(!isCollapsed);
//   }

//   const location = `/admin/${params.id}`;

//   return (
//     <aside className="w-72 h-full px-2 py-3 rounded-lg border ">

//       <div className="w-full h-full flex flex-col justify-between">
//       {!mobileWidth && (
//         <div className="absolute right-[-20px] top-7">
//           <Button
//             onClick={toggleSidebar}
//             variant="secondary"
//             className=" rounded-full p-2"
//           >
//             <ChevronRight />
//           </Button>
//         </div>
//       )}
//         <div className="w-full">
//           <div className="mb-10">
//             <h1 className="text-2xl font-bold text-center">Admin Dashboard</h1>
//           </div>
//           <div className="w-full flex gap-3 flex-col">
//           <NavLinksGenerator
//             placeholder="Home"
//             location={`${location}/home`}
//             icon={<LayoutDashboard className="size-4" />}
//           />

//           <NavLinksGenerator
//             placeholder="Products"
//             location={`${location}/products`}
//             icon={<BaggageClaim className="size-4" />}
//           />
//              <NavLinksGenerator
//             placeholder="Messages"
//             location={`${location}/messages`}
//             icon={<MessageCircle className="size-4" />}
//           />
//                <NavLinksGenerator
//             placeholder="Sales"
//             location={`${location}/sales`}
//             icon={<BarChart className="size-4" />}
//           />
//           <NavLinksGenerator
//             placeholder="Users"
//             location={`${location}/users`}
//             icon={<Users2 className="size-4" />}
//           />
//           </div>

//         </div>
//         <div>
//         <NavLinksGenerator
//             placeholder="Settings"
//             location={`${location}/settings`}
//             icon={<Settings className="size-4" />}
//           />
//         </div>
//       </div>
//     </aside>
//   );
// };

// export default Sidebar;
'use client'
import { useState } from "react";

type Props = {};

import {
  BaggageClaim,
  BarChart,
  ChevronRight,
  LayoutDashboard,
  MessageCircle,
  Settings,
  ShoppingCart,
  Users2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useWindowWidth } from "@react-hook/window-size";
import { Nav } from "../ui/nav";
import { useParams } from 'next/navigation'

export default function SideNavbar({}: Props) {
  const params = useParams();
  const location = `/admin/${params.id}`;
  const [isCollapsed, setIsCollapsed] = useState(false);

  const onlyWidth = useWindowWidth();
  const mobileWidth = onlyWidth < 768;

  function toggleSidebar() {
    setIsCollapsed(!isCollapsed);
  }

  return (
    <div className=" min-w-[80px]  px-3 mr-3  pb-10 pt-24   sticky top-0 z-50 left-0">
      {!mobileWidth && (
        <div className="absolute  w-full top-7">
          <Button
            onClick={toggleSidebar}
            className=" rounded-md bg-primary w-full items-center  justify-around text-background p-2"
          >
            {!isCollapsed && <span className="text">Collapse</span>}
            {isCollapsed && <ChevronRight className="h-5 w-5" />}
          </Button>
        </div>
      )}
      <Nav
        isCollapsed={mobileWidth ? true : isCollapsed}
        links={[
          {
            title: "Dashboard",
            href: `${location}/home`,
            icon: LayoutDashboard,
          },
          {
            title: "Products",
            href: `${location}/products`,
            icon: BaggageClaim,
          },
          {
            title: "Orders",
            href: `${location}/orders`,
            icon: ShoppingCart,
          },
          {
            title: "Messages",
            href: `${location}/messages`,
            icon: MessageCircle,
          },
          {
            title: "Users",
            href: `${location}/users`,
            icon: Users2,
          },
          {
            title: "Sales",
            href: `${location}/sales`,
            icon: BarChart,
          },
      
          {
            title: "Settings",
            href: `${location}/settings`,
            icon: Settings,
          },
        ]}
      />
    </div>
  );
}

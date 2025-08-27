"use client";

import { Avatar, Button } from "@mantine/core";

import classes from "./HeaderMenu.module.css";
import { IconMenu2 } from "@tabler/icons-react";
import { useState } from "react";
import { NavbarNested } from "../Navbar/Navbar";
import ThemeToggle from "../ThemeToggle";
import { useNavigate } from "react-router-dom";

// const links = [
//   { link: "/about", label: "Features" },
//   {
//     link: "#1",
//     label: "Learn",
//     links: [
//       { link: "/docs", label: "Documentation" },
//       { link: "/resources", label: "Resources" },
//       { link: "/community", label: "Community" },
//       { link: "/blog", label: "Blog" },
//     ],
//   },
//   { link: "/about", label: "About" },
//   { link: "/pricing", label: "Pricing" },
//   {
//     link: "#2",
//     label: "Support",
//     links: [
//       { link: "/faq", label: "FAQ" },
//       { link: "/demo", label: "Book a demo" },
//       { link: "/forums", label: "Forums" },
//     ],
//   },
// ];

export function HeaderMenu() {
  // const [opened, { toggle }] = useDisclosure(false);

  // const items = links.map((link) => {
  //   const menuItems = link.links?.map((item) => (
  //     <Menu.Item key={item.link}>{item.label}</Menu.Item>
  //   ));

  //   if (menuItems) {
  //     return (
  //       <Menu
  //         key={link.label}
  //         trigger="hover"
  //         transitionProps={{ exitDuration: 0 }}
  //         withinPortal
  //       >
  //         <Menu.Target>
  //           <a
  //             href={link.link}
  //             className={classes.link}
  //             onClick={(event) => event.preventDefault()}
  //           >
  //             <Center>
  //               <span className={classes.linkLabel}>{link.label}</span>
  //               <IconChevronDown size={14} stroke={1.5} />
  //             </Center>
  //           </a>
  //         </Menu.Target>
  //         <Menu.Dropdown>{menuItems}</Menu.Dropdown>
  //       </Menu>
  //     );
  //   }

  //   return (
  //     <a
  //       key={link.label}
  //       href={link.link}
  //       className={classes.link}
  //       onClick={(event) => event.preventDefault()}
  //     >
  //       {link.label}
  //     </a>
  //   );
  // });

  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => setIsOpen(!isOpen);
  const closeSidebar = () => setIsOpen(false);
  const navigate = useNavigate();
  return (
    <>
      <header className={`${classes.header} fixed sm:relative w-full z-50 sm:z-0`}>
        <div className="flex justify-between px-[10px] md:px-[45px]">
          <div className="flex flex-row justify-between md:justify-end items-center w-[100%] h-[56px] ">
            <div className="flex md:hidden">
              <IconMenu2 size={24} onClick={toggleSidebar} />
            </div>
            {/* <Group gap={5}>
                  {items}
              </Group>  */}
            <div className="flex flex-row gap-3 items-center">
              <ThemeToggle />
              <Button onClick={() => navigate("/")}>Log Out</Button>
              <Avatar color="blue" radius="xl">
                HR
              </Avatar>
            </div>
          </div>
        </div>
      </header>
      {isOpen && <NavbarNested onClose={closeSidebar} />}
    </>
  );
}

"use client";
import {
  IconLayersIntersect2,
  IconLayoutDashboard,
  IconX,
} from "@tabler/icons-react";
import { Group, Image, ScrollArea } from "@mantine/core";
import classes from "./Navbar.module.css";
import { LinksGroup } from "./NavbarLinksGroup";
import { UserButton } from "./UserButton/UserButton";
import { AnimatePresence, motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const mockdata = [
  {
    label: "Dashboard",
    icon: IconLayoutDashboard,
    initiallyOpened: true,
    link: "/dashboard",
  },
  {
    label: "Interviews",
    icon: IconLayersIntersect2,
    initiallyOpened: true,
    links: [
      { label: "List", link: `interviews` },
    ],
  },
  // {
  //   label: "Analytics",
  //   icon: IconChartDots2,
  //   initiallyOpened: true,
  //   link: "/dashboard",
  // },
  // {
  //   label: "Settings",
  //   icon: IconSettings,
  //   initiallyOpened: true,
  //   link: "/dashboard",
  // },
  // {
  //   label: "Destinations",
  //   icon: IconMapPins,
  //   initiallyOpened: false,
  //   links: [
  //     { label: "Overview", link: `/destination/overview` },
  //     { label: "List", link: `/destination/list` },
  //   ],
  // },
];

interface NavbarNestedProps {
  onClose?: () => void;
}

export function NavbarNested({ onClose }: NavbarNestedProps) {
  const navigate = useNavigate();

  const links = mockdata.map((item) => (
    <LinksGroup {...item} key={item.label} onClose={onClose } />
  ));

  return (
    <>
      <div className="hidden md:flex">
        <nav className={classes.navbar}>
          <div className={classes.header}>
            <Group justify="space-between">
              <div onClick={() => navigate(`/`)} className="h-[50px] w-[150px]">
                <Image src="/logo.jpg" alt="logo" h={50} w={150} />
              </div>
            </Group>
          </div>
          <ScrollArea className={classes.links}>
            <div className={classes.linksInner}>{links}</div>
          </ScrollArea>
          <div className={classes.footer}>
            <UserButton />
          </div>
        </nav>
      </div>
      <AnimatePresence>
        <motion.aside
          initial={{ x: "0%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="fixed top-0 left-0 z-999 h-screen w-[250px] bg-white shadow-lg p-[10px] flex flex-col justify-between gap-6 md:hidden"
        >
          <div className="">
            <div className="flex justify-between items-center ">
              <div onClick={onClose} className="h-[50px] w-[150px]">
                <Image src="/logo.jpg" alt="logo" h={50} w={150} />
              </div>
              <IconX className="cursor-pointer" onClick={onClose} />
            </div>
            <ScrollArea className={classes.links}>
              <div className={classes.linksInner}>{links}</div>
            </ScrollArea>
          </div>
          <div className={classes.footer}>
            <UserButton />
          </div>
        </motion.aside>
      </AnimatePresence>
    </>
  );
}

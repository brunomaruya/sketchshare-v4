"use client ";

import {
  BellIcon,
  HomeIcon,
  PlusCircleIcon,
  ChatBubbleLeftIcon,
} from "@heroicons/react/24/outline";

export const navLinks = [
  {
    name: "Home",
    path: "/",
    icon: <HomeIcon />,
  },
  {
    name: "Messages",
    path: "/messages",
    icon: <ChatBubbleLeftIcon />,
  },
  {
    name: "Post",
    path: "/",
    icon: <PlusCircleIcon />,
  },
  {
    name: "Notifications",
    path: "/",
    icon: <BellIcon />,
  },
];

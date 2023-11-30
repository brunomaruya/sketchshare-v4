"use client";

import * as React from "react";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { UserGroupIcon } from "@heroicons/react/24/outline";
import { UserContext } from "../../context/UserContext";

const frameworks = [
  {
    value: "next.js",
    label: "Next.js",
  },
  {
    value: "sveltekit",
    label: "SvelteKit",
  },
  {
    value: "nuxt.js",
    label: "Nuxt.js",
  },
  {
    value: "remix",
    label: "Remix",
  },
  {
    value: "astro",
    label: "Astro",
  },
];

export function UserSearcher() {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("");
  const { usersList } = React.useContext(UserContext);
  // console.log("usersList in userSearcher: ");
  // console.log(usersList);
  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <UserGroupIcon className="size-icon hover:cursor-pointer " />
      </PopoverTrigger>

      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput placeholder="Search user..." />
          <CommandEmpty>No user found.</CommandEmpty>
          <CommandGroup>
            {usersList
              ? usersList.map((user) => (
                  <CommandItem key={user.accountId}>
                    {user.username}
                  </CommandItem>
                ))
              : "Loading"}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  );
}

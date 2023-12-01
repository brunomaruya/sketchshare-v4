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

export function UserSearcher() {
  const [open, setOpen] = React.useState(false);
  const { usersList } = React.useContext(UserContext);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <UserGroupIcon className="size-icon hover:cursor-pointer " />
      </PopoverTrigger>

      <PopoverContent className="w-[200px] p-0 bg-background">
        <Command>
          <CommandInput placeholder="Search user..." />
          <CommandEmpty>No user found.</CommandEmpty>
          <CommandGroup>
            {usersList
              ? usersList.map((user: any) => (
                  <button
                    className="flex flex-col w-full "
                    key={user.accountId}
                    onClick={() => {
                      console.log("clicked");
                      window.location.assign(`/users/${user.username}`);
                    }}
                  >
                    <CommandItem className="w-full">
                      onclick
                      {user.username}
                    </CommandItem>
                  </button>
                ))
              : "Loading"}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  );
}

import React, { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import { Avatar } from "@nextui-org/react";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownSection,
  DropdownItem,
} from "@nextui-org/react";
import ThemeSwitcher from "../common/ThemeSwitcher";
export default function UserBtn() {
  const { currentUser } = useContext(UserContext);
  const goToPageUser = () => {
    window.location.assign(`/users/${currentUser.name}`);
  };
  return (
    <div>
      <Dropdown closeOnSelect={false}>
        <DropdownTrigger>
          <Avatar name={currentUser.name} />
        </DropdownTrigger>
        <DropdownMenu>
          <DropdownItem
            onClick={() => goToPageUser()}
            startContent={<Avatar name={currentUser.name} />}
          >
            {currentUser.name}
          </DropdownItem>
          <DropdownItem closeOnSelect={false}>
            <ThemeSwitcher />
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </div>
  );
}

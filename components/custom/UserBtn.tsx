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
import SignOutBtn from "../common/SignOutBtn";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";
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

        {/* // ---- DROPDOWN MENU -------------------------------------------------------------------- */}

        <DropdownMenu>
          <DropdownItem
            onClick={() => goToPageUser()}
            startContent={<Avatar name={currentUser.name} />}
          >
            {currentUser.name}
          </DropdownItem>
          <DropdownItem closeOnSelect={false}>
            <div className="flex justify-between items-center">
              Dark Mode
              <ThemeSwitcher />
            </div>
          </DropdownItem>
          <DropdownItem
            startContent={<ArrowTopRightOnSquareIcon className="h-5" />}
          >
            <SignOutBtn />
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </div>
  );
}

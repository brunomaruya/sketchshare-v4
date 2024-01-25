import Link from "next/link";
import React from "react";
import Image from "next/image";
import logo from "../../public/images/pencil.png";

export default function Logo() {
  return (
    <Link href="/">
      <div className="flex items-center gap-2 ">
        <div className="h-5 w-5 md:h-7 md:w-7">
          <Image src={logo} alt="logo" />
        </div>
        <span className="logo">SketchShare</span>
      </div>
    </Link>
  );
}

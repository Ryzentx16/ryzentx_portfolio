import "styles/header.css";
import AvatarImage from "comp/AvatarImage";
import { useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";

export default function Header(props) {
  const currentPath = usePathname();

  if (currentPath === "/") {
    if (typeof window !== "undefined") {
      window.location.replace("/about");
    }
  }
  const btns = [
    {
      title: "About",
      path: "/about",
    },
    {
      title: "Projects",
      path: "/projects",
    },
    {
      title: "Certificates",
      path: "/certificates",
    },
    {
      title: "Contact",
      path: "/contact",
    },
  ];

  const btnList = btns.map((e, index) => {
    return (
      <Link
        key={index}
        className={`nav_btn ${currentPath == e.path ? "active" : ""}`}
        href={e.path}
      >
        {e.title}
      </Link>
    );
  });

  return (
    <div className="topnav">
      <nav id="headerLinks" className="headerLinks">
        {btnList}
      </nav>
      <div className="pfpContainer" style={{ display: "flex" }}>
        <AvatarImage
          src={`${process.env.BASE_PATH}/avatar.png`}
          alt="Avatar"
          className="avatar"
        />
      </div>
    </div>
  );
}

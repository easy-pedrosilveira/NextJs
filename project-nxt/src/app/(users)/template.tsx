"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import "./styles.css";
import { useState } from "react";

const navLinks = [
  { name: "Profile", href: "/profile" },
  { name: "Info", href: "/info" },
  { name: "Config", href: "/config" },
];
export default function UsersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [value, setValue] = useState("");
  const pathName = usePathname();
  return (
    <div>
      <div>
        <input
          type="text"
          className="text-zinc-800"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </div>
      {navLinks.map((link) => {
        const isActive = pathName.startsWith(link?.href);
        return (
          <Link
            key={link?.href}
            href={link?.href}
            className={`${isActive ? "text-red-700" : "text-blue-700"} `}
          >
            {link?.name}
          </Link>
        );
      })}
      {children}
    </div>
  );
}

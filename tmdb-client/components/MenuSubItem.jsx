import React from "react";
import Link from "next/link";

export function MenuSubItem({ name, url }) {
  return (
    <li className="py-1.5 hover:bg-gray-50">
      <Link href={url} className="ml-4">
        {name}
      </Link>
    </li>
  );
}

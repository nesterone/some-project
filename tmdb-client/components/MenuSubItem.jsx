import React from "react";
import Link from "next/link";

export function MenuSubItem({ name, url }) {
  return (
    <li>
      <Link href={url}>{name}</Link>
    </li>
  );
}

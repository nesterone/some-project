import React from "react";

export function Menu(props) {
  return (
    <ul className="ml-8 hidden font-semibold text-white sm:flex">
      <li className="mr-2 p-2">Movies</li>
      <li className="mr-2 p-2">TV Shows</li>
      <li className="mr-2 p-2">People</li>
      <li className="mr-2 p-2">More</li>
    </ul>
  );
}

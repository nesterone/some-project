import React from "react";

export function NavBlock(props) {
  return (
    <nav className="min-w-[120px] text-white">
      <h3 className="pb-2 text-xl font-bold uppercase"> System Status</h3>
      <ol>
        <li className="cursor-pointer">About TMDB</li>
        <li className="cursor-pointer">Contact Us</li>
        <li className="cursor-pointer">Support Forums</li>
        <li className="cursor-pointer">API</li>
        <li className="cursor-pointer">System Status</li>
      </ol>
    </nav>
  );
}

import React from "react";
import Link from "next/link";

("use-client");

const Navigation = () => {
    //TODO: style with tailwind -- space-between w/ no horizontal list, no bullet points
  return (
    <>
      <nav>
        <h1>SuperGoodAndNiceBooksList</h1>
        <div>
          <ul>
            <li>
              <Link href={"/"}>Home</Link>
            </li>
            <li>
              <Link href={"/favorites"}>Favorites</Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export { Navigation };

import React from "react";
import Link from "next/link";
import Button from "./Button";

import { useRouter } from "next/router";

function Header() {
  const router = useRouter();

  function returnLinkStyles(href) {
    if (router.pathname === href) {
      return "mr-12 font-medium border-b-2 border-indigo-600";
    } else {
      return "text-gray-600 mr-12 hover:text-gray-900";
    }
  }

  return (
    <header className="px-4 sm:px-8 mx-auto flex flex-col sm:flex-row sm:justify-between py-5">
      <div className="flex flex-col sm:flex-row justify-between">
        <div className="flex items-center">
          <Link href="/">
            <span className="flex-none mx-auto  flex cursor-pointer hover:opacity-70">
              <img className="sm:hidden" alt="logo" src="/icon.svg" />
              <img className="hidden sm:block" alt="logo" src="/logo.svg" />
              <span className="bg-red-100 rounded-md h-5 text-sm px-3 ml-2 text-red-600">
                ADMIN
              </span>
            </span>
          </Link>

          <div className="flex sm:hidden flex-auto items-center justify-end">
            <Button
              url="/submit-project"
              text="Add your project"
              arrow={true}
            />
          </div>
        </div>

        <nav className="sm:ml-12 mt-4 sm:mt-0 sm:items-center flex">
          <Link href="/">
            <a className={returnLinkStyles("/")}>Project Requests</a>
          </Link>
          <Link href="/makers">
            <a className={returnLinkStyles("/makers")}>Maker Requests</a>
          </Link>
        </nav>
      </div>
      <div className="hidden sm:inline flex items-center">
        <Button url="/submit-project" text="Add your project" arrow={true} />
      </div>
    </header>
  );
}

export default Header;

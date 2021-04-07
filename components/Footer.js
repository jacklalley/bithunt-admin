import React from "react";
import Link from "next/link";

function Footer() {
  return (
    <footer className="px-8 py-4 mx-auto items-center flex flex-col-reverse sm:flex-row justify-between border-t border-gray-200 mt-16">
      <div className="text-center sm:text-left">
        <p className="text-sm text-gray-600">
          © 2021 BitCloutHunt. All rights reserved.
        </p>
        <p className="text-xs text-gray-500">
          BitCloutHunt is not affiliated with BitClout.
        </p>
      </div>

      <p className="text-sm text-gray-600 mb-4 sm:mb-0">
        <a
          className="text-gray-900 hover:text-gray-700"
          href="https://bitclout.com/u/bitclouthunt"
          target="_blank"
        >
          @bitclouthunt
        </a>{" "}
        is a project by{" "}
        <a
          className="text-gray-900"
          href="https://bitclout.com/u/jckly"
          target="_blank"
        >
          @jckly
        </a>
      </p>
    </footer>
  );
}

export default Footer;

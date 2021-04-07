import React from "react";
import Link from "next/link";

function Button({ text, url, arrow }) {
  return (
    <Link href={url}>
      <a className="py-2 px-3 rounded-lg font-medium text-white text-sm bg-indigo-600 flex items-center hover:bg-indigo-800">
        {text}
        {arrow ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 ml-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            />
          </svg>
        ) : null}
      </a>
    </Link>
  );
}

export default Button;

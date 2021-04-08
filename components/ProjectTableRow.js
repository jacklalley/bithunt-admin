import React from "react";
import ProjectTable from "./ProjectTable";

function ProjectTableRow(props) {
  const {
    name,
    supply,
    marketCap,
    avatarUrl,
    price,
    bio,
    website,
    bitcloutUrl,
    launched,
    published,
  } = props;

  function numberWithCommas(x) {
    return x.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
  }

  return (
    <tr>
      <td>
        {published ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-indigo-600 mx-auto"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-gray-400 mx-auto"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        )}
      </td>
      <td class="px-6 py-4 whitespace-nowrap">
        <div class="flex items-center">
          <div class="flex-shrink-0 h-16 w-16">
            <span
              class="h-16 w-16 block rounded-full border border-gray-200 bg-cover"
              style={{
                backgroundImage: `url('${avatarUrl}')`,
              }}
              alt=""
            ></span>
          </div>
          <div class="ml-4">
            <div class="font-medium text-gray-900 items-center flex">
              {name == "" ? "Project Name" : name}
              {launched ? null : (
                <span className="text-xs bg-gray-100 text-indigo-6 font-medium h-4 px-1 ml-2 text-gray-400 rounded-sm">
                  Not launched
                </span>
              )}
            </div>
            <div class="text-sm text-left text-gray-500">
              {bio == "" ? "A one line short description" : bio}
            </div>
          </div>
        </div>
      </td>
      <td class="px-6 py-4 whitespace-nowrap">
        <div class="text-sm text-gray-900 font-medium">
          ${numberWithCommas(price)}
        </div>
      </td>

      <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900 font-medium">
        ${numberWithCommas(marketCap)}
      </td>
      <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900 font-medium">
        {supply} Coins
      </td>
      <td class="px-6 py-4 whitespace-nowrap text-left text-sm">
        <a
          href={website}
          class="flex text-gray-500 hover:text-gray-700"
          target="_blank"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-4 w-4 mr-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              strokeWidth="2"
              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
            />
          </svg>{" "}
          Website
        </a>
        <a
          href={bitcloutUrl}
          target="_blank"
          class="flex text-gray-500 hover:text-gray-700 items-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 mr-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
            />
          </svg>
          Bitclout Profile
        </a>
      </td>
    </tr>
  );
}

export default ProjectTableRow;

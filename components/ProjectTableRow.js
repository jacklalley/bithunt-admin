import React, { useState } from "react";
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
  } = props;

  const [buttonText, setButtonText] = useState("Get command");

  console.log(props);

  function numberWithCommas(x) {
    return x.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
  }

  function getItem() {
    const text = `Project.create(
        name: '${name}', 
        bio: '${bio}',
        avatar_url: 'FILL',
        website_url: '${website}',
        bitclout_url: '${bitcloutUrl}',
        published: true, 
        launched: true
      )`;
    navigator.clipboard.writeText(text).then(
      function () {
        setButtonText("Copied!");
      },
      function (err) {
        setButtonText("Failed to copy");
      }
    );
  }

  return (
    <tr>
      <td class="px-6 py-4 whitespace-nowrap">
        <div class="flex items-center">
          <div class="flex-shrink-0 h-16 w-16">
            <img
              class="h-16 w-16 rounded-full border border-gray-200"
              src={avatarUrl}
              alt=""
            />
          </div>
          <div class="ml-4">
            <div class="font-medium text-gray-900 items-center flex">
              {name}{" "}
              {launched ? null : (
                <span className="text-xs bg-gray-100 text-indigo-6 font-medium h-4 px-1 ml-2 text-gray-400 rounded-sm">
                  Not launched
                </span>
              )}
            </div>
            <div
              class="text-sm text-gray-500 break-normal"
              style={{ maxWidth: 300 }}
            >
              {bio}
            </div>
          </div>
        </div>
      </td>

      <td
        class="px-6 py-4 whitespace-nowrap text-left overflow-hidden text-sm"
        style={{ maxWidth: 300 }}
      >
        <a href={website} class="flex text-gray-500 hover:text-gray-700">
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
          {website}
        </a>
      </td>
      <td class="px-6 py-4 whitespace-nowrap text-left text-sm">
        <a
          href={bitcloutUrl}
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
          {bitcloutUrl}
        </a>
      </td>
      <td>
        <a
          onClick={getItem}
          className="cursor-pointer hover:bg-indigo-700 bg-indigo-500 text-white px-3 rounded-md text-sm py-1"
        >
          {buttonText}
        </a>
      </td>
    </tr>
  );
}

export default ProjectTableRow;

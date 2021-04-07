import React from "react";
import Link from "next/link";
import ProjectTableHeader from "./ProjectTableHeader";
import ProjectTableRow from "./ProjectTableRow";

function ProjectTable({ projects }) {
  function renderRow(project, latest_price, index) {
    if (latest_price == undefined) {
      return (
        <ProjectTableRow
          name={project.name}
          bio={project.bio}
          website={project.website_url}
          avatarUrl={project.avatar_url}
          bitcloutUrl={project.bitclout_url}
          price="0.00"
          marketCap="0.00"
          supply="0.00"
          key={index}
          launched={project.launched}
        />
      );
    } else {
      return (
        <ProjectTableRow
          name={project.name}
          bio={project.bio}
          website={project.website_url}
          avatarUrl={project.avatar_url}
          bitcloutUrl={project.bitclout_url}
          price={latest_price.price}
          marketCap={latest_price.market_cap}
          supply={latest_price.supply}
          key={index}
          launched={project.launched}
        />
      );
    }
  }

  return (
    <div className="flex flex-col">
      <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
              <ProjectTableHeader />
              <tbody className="bg-white divide-y divide-gray-200">
                {projects.projects.map((project, index) => {
                  return renderRow(project, undefined, index);
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectTable;

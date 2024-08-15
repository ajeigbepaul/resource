import Filter from "@/components/Filter";
import Header from "@/components/Header";
import ResourceCard from "@/components/ResourceCard";
import Search from "@/components/Search";
import { getResource, getResourcePlaylist } from "@/sanity/actions";

import React from "react";
export const revalidate = 60;
interface Props {
  searchParams: { [key: string]: string | undefined };
}
const Page = async ({ searchParams }: Props) => {
  console.log(searchParams);
  const resources = await getResource({
    query: searchParams?.query || "",
    category: searchParams?.category || "",
    page: "1",
  });
  const resourcesPlaylist = await getResourcePlaylist();
  console.log(resourcesPlaylist);
  return (
    <main className="flex-center paddings mx-auto w-full max-w-screen-2xl flex-col">
      <section className="nav-padding w-full">
        <div className="flex-center relative min-h-[276px] w-full flex-col rounded-xl bg-banner bg-cover bg-center text-center">
          <h1 className="text-white text-center mb-6 sm:heading1 heading2">
            Paaje Resources
          </h1>
        </div>
        <Search />
      </section>
      <Filter />
      {(searchParams?.query || searchParams?.category) && (
        <section className="flex-center mt-6 w-full flex-col sm:mt-20">
          <Header
            
            query={searchParams?.query || ""}
            category={searchParams?.category || ""}
          />
          <div className="mt-12 flex w-full flex-wrap justify-center gap-16 sm:justify-start">
            {resources?.length > 0 ? (
              resources.map((resource: any) => (
                <ResourceCard
                  key={resource._id}
                  title={resource.title}
                  id={resource._id}
                  image={resource.image}
                  downloadNumber={resource.views}
                  slug={resource._id}
                />
              ))
            ) : (
              <p className="w-full flex-center text-white">
                No resources found!
              </p>
            )}
          </div>
        </section>
      )}
      {resourcesPlaylist.map((playlist: any) => (
        <section
          key={playlist._id}
          className="w-full flex-center flex-col mt-6 sm:mt-20"
        >
          <h1 className="text-white-800 self-start heading3">
            {playlist?.title}
          </h1>
          <div className="mt-12 flex w-full flex-wrap justify-center gap-8 sm:justify-start">
            {playlist?.resources.map((resource: any) => (
              <ResourceCard
                key={resource._id}
                title={resource.title}
                id={resource._id}
                image={resource.image}
                downloadNumber={resource.views}
                slug={resource._id}
              />
            ))}
          </div>
        </section>
      ))}
    </main>
  );
};

export default Page;

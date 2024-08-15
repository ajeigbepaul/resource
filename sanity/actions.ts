import { groq } from "next-sanity";
import { readClient } from "./lib/client";
import { buildQuery } from "./utils";
interface GetResourceParams {
  query: string;
  category: string;
  page: string;
}

export const getResourcePlaylist = async () => {
  try {
    const resources = await readClient.fetch(
      groq`*[_type == "resourcePlaylist"] | order(_createdAt desc){title,
          _id,
          title,
          resources[0...6]->{
            title,
            _id,
            downloadLink,
            "image": poster.asset->url,
            views,
            category
          }
        }`
    );
    return resources;
  } catch (error) {
    console.error("Failed to fetch resources:", error);
  }
};

export const getResource = async (params: GetResourceParams) => {
  const { query, category, page } = params;
  try {
    const pageNumber = parseInt(page, 10);
    if (isNaN(pageNumber)) {
      throw new Error("Invalid page number");
    }
    const queryString = buildQuery({
      type: "resource",
      query,
      category,
      page: pageNumber,
    });
    const resources = await readClient.fetch(
      groq`${queryString}{title,
        _id,
        downloadLink,
        "image": poster.asset->url,
        views,
        slug,
        category
      }`
    );
    return resources;
  } catch (error) {
    console.error("Failed to fetch resources:", error);
  }
};

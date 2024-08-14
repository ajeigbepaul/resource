const schema = {
  name: "resource",
  title: "Resource",
  type: "document",
  field: [
    {
      name: "title",
      title: "Title",
      type: "string",
      require,
      validation: (Rule: any) => Rule.require(),
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      option: { source: "title" },
    },
    {
      name: "downloadLink",
      title: "Download Link",
      type: "url",
      validation: (Rule: any) => Rule.require(),
    },
    {
      name: "views",
      title: "Views",
      type: "number",
      initialValue: 0,
    },
    {
      name: "poster",
      title: "Poster",
      type: "image",
      validation: (Rule: any) => Rule.require(),
      options: {
        hotspot: true,
      },
    },
    { name: "category",
      title: "Category",
      type: "string",
      validation: (Rule: any) => Rule.require(),
      options:{
        list:['React js','Next js','Tailwind css','Node js','others']
      }
    },
  ],
};
export default schema

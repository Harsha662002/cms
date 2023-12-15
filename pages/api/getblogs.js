import client from "../../lib/contentful/client";

export default async function GET(req, res) {
  try {
    // const space = await client.contentfulGetClient.getSpace(
    //   process.env.CONTENTFUL_SPACE_ID
    // );
    // console.log("SPACE ", { space });
    // const environment = await space.getEnvironment(
    //   process.env.CONTENTFUL_ENVIRONMENT
    // );
    // console.log("ENV ", { environment });

    // const response = await environment.getEntries({
    //   content_type: "BlogCard",
    // });
    //console.log(response.items);
    const response = await fetch(
      `https://cdn.contentful.com/spaces/${process.env.CONTENTFUL_SPACE_ID}/environments/${process.env.CONTENTFUL_ENVIRONMENT}/entries?access_token=${process.env.CONTENTFUL_ACCESS_TOKEN}&content_type=blogCard`
    );

    if (!response.ok) {
      throw new Error(`Failed to fetch data. Status: ${response.status}`);
    }

    const blogsData = await response.json();
    console.log("BLOGS DATA", blogsData);
    res.status(200).json({ message: "Blogs fetched successfully", blogsData });
  } catch (error) {
    console.error("Error fetching Blogs:", error);
    res
      .status(500)
      .json({ message: "Something went wrong while fetching the Blogs" });
  }
}

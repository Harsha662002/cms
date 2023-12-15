import contentfulPostClient from "../../lib/contentful/client";

export default async function PUT(request) {
  const space = await contentfulPostClient.getSpace(
    process.env.CONTENTFUL_SPACE_ID
  );
  console.log("SPACE ", { space });
  const environment = await space.getEnvironment(
    process.env.CONTENTFUL_ENVIRONMENT
  );
  console.log("ENV ", { environment });

  const entry = environment.createEntry("blogPost", {
    fields: {
      title: {
        "en-US": "Harsha Vasireddy",
      },
      content: {
        "en-US": "Hey this is Harsha Vasireddy",
      },
    },
  });

  return Response.json({ entry });
}

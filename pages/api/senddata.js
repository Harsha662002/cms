import client from "../../lib/contentful/client";

export default async function PUT(request) {
  const space = await client.contentfulPostClient.getSpace(
    process.env.CONTENTFUL_SPACE_ID
  );
  console.log("SPACE ", { space });
  const environment = await space.getEnvironment(
    process.env.CONTENTFUL_ENVIRONMENT
  );
  console.log("ENV ", { environment });

  const requestBody = JSON.parse(request.body);

  const {
    title,
    content,
    tags,
    coverImage,
    author,
    currentDate,
    slug,
    summary,
  } = requestBody;

  const entry = environment.createEntry("blogCard", {
    fields: {
      title: {
        "en-US": title,
      },
      slug: {
        "en-US": slug,
      },
      summary: {
        "en-US": summary,
      },
      date: {
        "en-US": currentDate,
      },
    },
  });

  await entry.publish();

  return Response.json({ entry });
}

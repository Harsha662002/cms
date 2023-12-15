// contentful/client.js
// import { createClient } from "contentful";

// const client = createClient({
//   space: "YOUR_SPACE_ID",
//   accessToken: "YOUR_ACCESS_TOKEN",
// });

// export { client };

const contentful = require("contentful-management");

const contentfulPostClient = contentful.createClient({
  accessToken: process.env.CONTENTFUL_CMA_TOKEN,
});

const contentfulGetClient = contentful.createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  environment: process.env.CONTENTFUL_ENVIRONMENT,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
});

export default { contentfulPostClient, contentfulGetClient };

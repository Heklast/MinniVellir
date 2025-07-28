import { GraphQLClient } from "graphql-request";

const endpoint = "https://graphql.datocms.com/";

const client = new GraphQLClient(endpoint, {
  headers: {
    Authorization: `Bearer ${process.env.NEXT_PUBLIC_DATOCMS_API_TOKEN}`,
  },
});

export async function fetchGalleryPhotos() {
  const query = `
    {
      photo {
        photos {
          url
          width
          height
        }
      }
    }
  `;
  const data = await client.request(query);
  return data.allSummerhouses[0]?.gallery || [];
}
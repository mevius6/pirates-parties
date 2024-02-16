// ? https://dmitripavlutin.com/javascript-fetch-async-await/#4-canceling-a-fetch-request

const responsiveImageFragment = `
  fragment responsiveImageFragment on ResponsiveImage {
    srcSet
    webpSrcSet
    sizes
    src
    width
    height
    aspectRatio
    alt
    title
    bgColor
    base64
  }
`;

const fetchAPI = async (query) => {
  const res = await fetch('https://graphql.datocms.com/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization': `Bearer ${process.env.DATOCMS_API_TOKEN}`,
    },
    body: JSON.stringify({ query }),
  });

  const json = await res.json();
  if (json.errors) {
    // console.error(json.errors)
    throw new Error('Не удалось получить API');
  }

  return json.data;
};

// eslint-disable-next-line no-unused-vars
const imageDims = {
  '1/1': [1024, 1024],
  '16/9': [1024, 576],
}

export const getAllPostsForHome = async () => {
  const data = await fetchAPI(`
    {
      allPosts(first: 3, orderBy: date_DESC) {
        title
        excerpt
        date
        slug
        coverImage {
          responsiveImage(imgixParams: {fm: jpg, fit: crop, w: 1024, h: 576 }) {
            ...responsiveImageFragment
          }
        }
      }
    }
    ${responsiveImageFragment}
  `);

  return data?.allPosts;
};

export const getAllGoodsForHome = async () => {
  const data = await fetchAPI(`
    {
      allGoodsLists(first: 3) {
        id
        poster {
          artEdition
          artForm
          artMedia
          artistName
          dateCreated
          inStock
          title
          about
          price
          scale
          lotImages {
            responsiveImage(imgixParams: {fm: jpg, fit: crop, w: 1024, h: 576 }) {
              ...responsiveImageFragment
            }
          }
        }
      }
    }
    ${responsiveImageFragment}
  `);

  return data?.allGoodsLists;
};

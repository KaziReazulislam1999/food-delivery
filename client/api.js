import sanityClient from './sanity'
let sanityQuery = (query, params) => sanityClient.fetch(query, params)

export const getFeaturedResturants = () => {
  return sanityQuery(`
      *[_type == 'featured'] {
        ...,
        restaurants[]->{
          ...,
          type->{
            name
          },
          dishes[]->,
          // Include the image field
          image,
        }
      }
    `)
}

export const getCategories = () => {
  return sanityQuery(`
        *[_type == 'category']
    `)
}

export const getFeaturedResturantById = (id) => {
  return sanityQuery(
    `
        *[_type == 'featured' && _id == $id] {
            ...,
            resturants[]->{
                ...,
                dishes[]->,
                type->{
                    name
                }
            }
        }[0]
    `,
    { id }
  )
}

import { createClient } from '@sanity/client'

import imageUrlBuilder from '@sanity/image-url'

const client = createClient({
  projectId: 'ojawgr7t',
  dataset: 'production',
  useCdn: true,
  apiVersion: '2021-08-31',
})

const builder = imageUrlBuilder(client)

export const urlFor = (source) => builder.image(source)

export default client

//sanity cors add http://localhost:3000

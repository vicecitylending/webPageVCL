import Prismic from 'prismic-javascript'

export const apiEndpoint = 'https://vicecitylending.cdn.prismic.io/api/v2'
export const accessToken = 'MC5aRVg3cWhFQUFDWUF5TVlS.77-9X--_ve-_vQbvv71P77-9NwoKeT5MYu-_ve-_vUMhCu-_ve-_vXDvv71MHUssWHU277-9'

// Client method to query documents from the Prismic repo
export const PrismicClient = (req = null) => (
  Prismic.client(apiEndpoint, createClientOptions(req, accessToken))
)

const createClientOptions = (req = null, prismicAccessToken = null) => {
  const reqOption = req ? { req } : {}
  const accessTokenOption = prismicAccessToken ? { accessToken: prismicAccessToken } : {}
  return {
    ...reqOption,
    ...accessTokenOption,
  }
}

import imageUrlBuilder from '@sanity/image-url'
import sanityClient from '../sanity/sanityClient'

const builder = imageUrlBuilder(sanityClient)

export function urlFor(source: any) {
    console.log("source image is", source)
  return builder.image(source)
}
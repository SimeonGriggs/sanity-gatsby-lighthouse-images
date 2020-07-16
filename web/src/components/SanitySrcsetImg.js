import React from 'react'

import {buildImageObj} from '../lib/helpers'
import {imageUrlFor} from '../lib/image-url'

export default ({mainImage, alt, maxWidth, width, height}) => {
  if (!mainImage) { return null }

  function generateUrl (imgWidth, imgHeight, size = 1, returnWidth = true) {
    let urlString = imageUrlFor(buildImageObj(mainImage))
      .width(Math.round(imgWidth * size))
      .height(imgHeight)
      .auto('format')
      .url()

    if (returnWidth) {
      urlString = `${urlString} ${Math.round(imgWidth * size)}w`
    }

    return urlString
  }

  const src = generateUrl(width, height, 1, false)
  const srcset = `
    ${generateUrl(width, height, 0.25)},
    ${generateUrl(width, height, 0.5)},
    ${generateUrl(width, height, 0.75)},
    ${generateUrl(width, height)}
  `

  return (
    <img
      style={{width: '100%', height: 'auto'}}
      sizes={`(max-width: ${maxWidth}px) 100vw, ${maxWidth}px`}
      srcSet={srcset}
      src={src}
      alt={alt}
      loading='lazy'
      width={width}
      height={height}
    />
  )
}

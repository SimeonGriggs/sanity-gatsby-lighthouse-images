import React from 'react'

import {buildImageObj} from '../lib/helpers'
import {imageUrlFor} from '../lib/image-url'

const SanitySrcsetImage = ({className, imageAsset, alt, maxWidth, width, height}) => {
  if (!imageAsset) { return null }

  if (!maxWidth) maxWidth = width

  function generateUrl (imgWidth, imgHeight, size = 1, returnWidth = true) {
    let urlString = imageUrlFor(buildImageObj(imageAsset))
      .width(Math.round(imgWidth * size))
      .height(imgHeight * size)
      .auto('format')
      .url()

    return returnWidth ? `${urlString} ${Math.round(imgWidth * size)}w` : urlString
  }

  const src = generateUrl(width, height, 1, false)
  const srcset = `
    ${generateUrl(width, height, 0.25)},
    ${generateUrl(width, height, 0.5)},
    ${generateUrl(width, height, 0.75)},
    ${generateUrl(width, height)}`

  return (
    <img
      className={className || ''}
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

export default SanitySrcsetImage

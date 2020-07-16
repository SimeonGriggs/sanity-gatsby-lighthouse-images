import React from 'react'
import Img from 'gatsby-image'
import {getFluidGatsbyImage} from 'gatsby-source-sanity'
import clientConfig from '../../client-config'

export default ({id, alt, maxWidth = 675}) => {
  if (!id) { return null }

  const fluidProps = getFluidGatsbyImage(
    id,
    {maxWidth},
    clientConfig.sanity
  )

  if (!fluidProps) { return null }

  return <Img fluid={fluidProps} alt={alt} />
}

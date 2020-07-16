import {format} from 'date-fns'
import {Link} from 'gatsby'
import React from 'react'
import {cn, getBlogUrl} from '../lib/helpers'
import PortableText from './portableText'

import styles from './blog-post-preview.module.css'
import {responsiveTitle3} from './typography.module.css'
import SanitySrcsetImg from './SanitySrcsetImg'

function BlogPostPreview (props) {
  return (
    <Link
      className={props.isInList ? styles.inList : styles.inGrid}
      to={getBlogUrl(props.publishedAt, props.slug.current)}
    >
      <div className={styles.leadMediaThumb}>
        <SanitySrcsetImg
          mainImage={props.mainImage}
          alt={props.mainImage.alt}
          maxWidth={1200}
          width={1200}
          height={Math.floor((9 / 16) * 1200)}
        />
      </div>
      <div className={styles.text}>
        <h3 className={cn(responsiveTitle3, styles.title)}>{props.title}</h3>
        {props._rawExcerpt && (
          <div className={styles.excerpt}>
            <PortableText blocks={props._rawExcerpt} />
          </div>
        )}
        <div className={styles.date}>{format(props.publishedAt, 'MMMM Do, YYYY')}</div>
      </div>
    </Link>
  )
}

export default BlogPostPreview

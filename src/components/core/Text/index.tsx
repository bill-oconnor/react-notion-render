/* eslint-disable camelcase */
import React, { Fragment, ReactElement } from 'react'

import IText from '../../../types/Text'
import { getClassname } from '../../../utils/getClassname'
import Link from '../../common/Link'
import withCustomComponent from '../../../hoc/withCustomComponent'

export function Text(props: IText) {
  const { text, annotations, type, href, plain_text, mapPageUrlFn } = props
  const annotationsClassName = getClassname(annotations)

  if (type === 'mention') {
    const redirectProps =
      props.mention?.type === 'page'
        ? {
            target: '_blank',
            rel: 'noreferrer'
          }
        : {}

    return (
      <a
        className={`rnr-mention ${annotationsClassName}`}
        href={href}
        {...redirectProps}
      >
        {plain_text}
      </a>
    )
  }

  if (!text) return null

  let element: ReactElement = <Fragment>{text.content}</Fragment>

  if (annotationsClassName)
    element = <span className={annotationsClassName}>{text.content}</span>

  // could havle multiple...
  if (annotations.bold) {
    element = <strong className={annotationsClassName}>{text.content}</strong>
  } else if (annotations.code) {
    element = <code className={annotationsClassName}>{text.content}</code>
  } else if (annotations.italic) {
    element = <em className={annotationsClassName}>{text.content}</em>
  } else if (annotations.strikethrough) {
    element = <s className={annotationsClassName}>{text.content}</s>
  } else if (annotations.underline) {
    element = <u className={annotationsClassName}>{text.content}</u>
  }

  if (text.link) {
    let {
      link: { url }
    } = text
    if (url[0] === '/' && mapPageUrlFn) {
      url = mapPageUrlFn(url.slice(1))
    }
    element = (
      <Link url={url} className={`${annotationsClassName} rnr-link`}>
        {element}
      </Link>
    )
  }

  return element
}

export default withCustomComponent(Text)
/* eslint-enable camelcase */

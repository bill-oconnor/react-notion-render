import React from 'react'

import { blockEnum } from '../../../types/BlockTypes'

import withContentValidation, {
  DropedProps
} from '../../../hoc/withContentValidation'

function Title({
  children,
  className,
  plainText,
  config,
  slugifyFn
}: DropedProps) {
  const { notionType: type } = config.block
  const props = {
    className,
    children,
    ...(slugifyFn ? { id: slugifyFn(plainText || '') } : {})
  }

  const Title = () => {
    if (type === blockEnum.HEADING2) {
      return <h2 {...props} />
    } else if (type === blockEnum.HEADING3) {
      return <h3 {...props} />
    }

    return <h1 {...props} />
  }

  return slugifyFn ? (
    <a href={`#${slugifyFn(plainText)}`} className='title'>
      <Title />
    </a>
  ) : (
    <Title />
  )
}

export default withContentValidation(Title)

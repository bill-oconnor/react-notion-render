import React, { PropsWithChildren } from 'react'

import { blockEnum } from '../../../types/BlockTypes'
import withContentValidation, {
  DropedProps
} from '../../../hoc/withContentValidation'

import ListItem from './components/ListItem'

import styles from './styles.module.css'

function List({ className, config }: DropedProps) {
  const { notionType: type, items } = config.block

  const cn = `${
    type === blockEnum.CHECK_LIST || type === blockEnum.TOGGLE_LIST
      ? styles['remove-style']
      : ''
  } ${className}`

  const Wrapper = (props: PropsWithChildren<{ type: blockEnum }>) => {
    const { children, type } = props

    return type === blockEnum.ENUM_LIST_PARENT ? (
      <ol className={cn}>{children}</ol>
    ) : (
      <ul className={cn}>{children}</ul>
    )
  }

  return (
    <Wrapper type={type}>
      {items?.map((item) => (
        <ListItem {...config} key={item.id} block={item} />
      ))}
    </Wrapper>
  )
}

export default withContentValidation(List)

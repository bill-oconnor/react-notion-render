import React, { Fragment } from 'react'

import { blockEnum } from '../../../../../types/BlockTypes'
import withContentValidation, {
  DropedProps
} from '../../../../../hoc/withContentValidation'

import styles from '../../styles.module.css'

import Checkbox from '../Checkbox'
import { Text } from '../../../../core/Text'

function ListItem({
  children,
  config,
  className,
  checked,
  blockComponentsMapper
}: DropedProps) {
  const { notionType: type, items, content } = config.block

  const Item = () => {
    if (type === blockEnum.CHECK_LIST) {
      return (
        <Fragment>
          <Checkbox checked={checked} />
          {children}
        </Fragment>
      )
    } else if (type === blockEnum.TOGGLE_LIST && items) {
      return (
        <details>
          <summary className={styles['drop-button']}>{children}</summary>
          <div className={styles['drop-children']}>
            {items.map((block) => {
              const Component = block.getComponent(blockComponentsMapper)

              return Component ? (
                <Component {...config} key={block.id} block={block} />
              ) : null
            })}
          </div>
        </details>
      )
    }
    return content ? (
      <div>
        {content.text.map((text, index) => (
          <Text key={index} {...text} />
        ))}
      </div>
    ) : (
      <p>{children}</p>
    )
  }

  return (
    <li className={className}>
      <Item />
    </li>
  )
}

export default withContentValidation(ListItem)

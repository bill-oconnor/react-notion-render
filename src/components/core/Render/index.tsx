import React, { PropsWithChildren } from 'react'

import { NotionBlock } from '../../../types/NotionBlock'
import { indexGenerator } from '../../../utils/indexGenerator'
import getBlocksToRender from '../../../utils/getBlocksToRender'
import {
  BlockComponentsMapperType,
  ClassnamesType
} from '../../../constants/BlockComponentsMapper/types'

interface Props {
  blocks: NotionBlock[]
  useStyles?: boolean
  classNames?: ClassnamesType
  emptyBlocks?: boolean
  slugifyFn?: (text: string) => string
  mapPageUrlFn?: (input: any) => string
  simpleTitles?: boolean
  blockComponentsMapper?: BlockComponentsMapperType
}

function Render({
  blocks,
  classNames = {},
  emptyBlocks,
  useStyles,
  slugifyFn,
  mapPageUrlFn,
  simpleTitles,
  blockComponentsMapper
}: Props) {
  if (!blocks || !blocks.length) return null

  const renderBlocks = getBlocksToRender(blocks)
  const index = indexGenerator(blocks)

  const Wrapper = (props: PropsWithChildren<{ useStyles: boolean }>) => {
    const { useStyles, children } = props
    return useStyles ? (
      <div className='rnr-container'>{children}</div>
    ) : (
      <React.Fragment>{children}</React.Fragment>
    )
  }

  return (
    <Wrapper useStyles={!!useStyles}>
      {renderBlocks.map((block) => {
        const Component = block.getComponent(blockComponentsMapper)
        if (!Component) {
          throw Error(
            `NO WAY ---- ${JSON.stringify(
              blockComponentsMapper
            )} ---- ${JSON.stringify(block)}`
          )
        }

        return Component ? (
          <Component
            key={block.id}
            classNames={classNames}
            emptyBlocks={emptyBlocks}
            block={block}
            slugifyFn={slugifyFn}
            mapPageUrlFn={mapPageUrlFn}
            simpleTitles={simpleTitles}
            index={index}
            blockComponentsMapper={blockComponentsMapper}
          />
        ) : null
      })}
    </Wrapper>
  )
}

export default Render

import React from 'react'

import Text from '../../types/Text'
import { CustomComponentPropsType, customComponents } from './constants'

function withCustomComponent<PropsType extends object>(
  TempComponent: React.ComponentType<PropsType>
): React.FC<PropsType> {
  return (props: PropsType & Text) => {
    const customComponent = customComponents.find((component) =>
      component.match.test(props.plain_text)
    )

    const Component: React.ComponentType<PropsType | CustomComponentPropsType> =
      customComponent?.component || TempComponent

    if (customComponent?.transformProps) {
      const newProps = { ...props, ...customComponent.transformProps(props) }
      return <Component {...newProps} />
    }

    return <Component {...props} />
  }
}

export default withCustomComponent

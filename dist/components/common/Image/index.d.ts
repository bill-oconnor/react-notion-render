import React from 'react';
import { DropedProps } from '../../../hoc/withContentValidation';
export interface Props {
    className?: string;
    media?: DropedProps['media'];
}
declare function Image({ className, media }: Props): React.JSX.Element | null;
export default Image;

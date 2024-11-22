import React from 'react';
import { DropedProps } from '../../../hoc/withContentValidation';
export type Props = {
    className?: string;
    media?: DropedProps['media'];
    frameBorder?: string;
    allow?: string;
    allowFullScreen?: boolean;
};
declare function Embed({ media, className, frameBorder, allow, allowFullScreen }: Props): React.JSX.Element | null;
export default Embed;

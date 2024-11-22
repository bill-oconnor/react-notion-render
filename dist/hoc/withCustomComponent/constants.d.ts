import React from 'react';
import Text from '../../types/Text';
import { Props as ImageProps } from '../../components/common/Image';
import { Props as LinkProps } from '../../components/common/Link';
import { Props as VideoProps } from '../../components/common/Video';
type WrappedComponentPropsType = Text;
export type CustomComponentPropsType = ImageProps | LinkProps | VideoProps;
interface CustomComponent {
    match: RegExp;
    component: React.ComponentType<CustomComponentPropsType>;
    transformProps?: (props: WrappedComponentPropsType) => CustomComponentPropsType;
}
export declare const customComponents: CustomComponent[];
export {};

import React from 'react';
import IText from '../../../types/Text';
import { BlockComponentsMapperType } from '../../../constants/BlockComponentsMapper/types';
import { ParsedBlock } from '../../../types/Block';
type PropTypes = IText & {
    blockComponentsMapper?: BlockComponentsMapperType;
    block?: ParsedBlock;
};
export declare const Text: React.FC<PropTypes>;
declare const _default: React.FC<PropTypes>;
export default _default;

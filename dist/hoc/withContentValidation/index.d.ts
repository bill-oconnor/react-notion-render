import React, { PropsWithChildren } from 'react';
import { ParsedBlock, SimpleBlock } from '../../types/Block';
import { BlockComponentsMapperType, ClassnamesType } from '../../constants/BlockComponentsMapper/types';
export interface WithContentValidationProps {
    classNames?: ClassnamesType;
    emptyBlocks?: boolean;
    block: ParsedBlock;
    slugifyFn?: (text: string) => string;
    mapPageUrlFn?: (input: any) => string;
    simpleTitles?: boolean;
    index?: SimpleBlock[];
    blockComponentsMapper?: BlockComponentsMapperType;
}
export type DropedProps = PropsWithChildren<{
    className?: string;
    checked: boolean;
    plainText: string;
    config: WithContentValidationProps;
    slugifyFn: ((text: string) => string) | null;
    language?: string;
    media?: {
        alt: string;
        src: string;
        href?: string;
        name?: string;
        extension?: string;
        player?: string;
    };
    index?: SimpleBlock[];
    blockComponentsMapper?: BlockComponentsMapperType;
}>;
declare function withContentValidation(Component: React.ComponentType<DropedProps>): React.FC<WithContentValidationProps>;
export default withContentValidation;

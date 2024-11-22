import React from 'react';
import { NotionBlock } from '../../../types/NotionBlock';
import { BlockComponentsMapperType, ClassnamesType } from '../../../constants/BlockComponentsMapper/types';
interface Props {
    blocks: NotionBlock[];
    useStyles?: boolean;
    classNames?: ClassnamesType;
    emptyBlocks?: boolean;
    slugifyFn?: (text: string) => string;
    mapPageUrlFn?: (input: any) => string;
    simpleTitles?: boolean;
    blockComponentsMapper?: BlockComponentsMapperType;
}
declare function Render({ blocks, classNames, emptyBlocks, useStyles, slugifyFn, mapPageUrlFn, simpleTitles, blockComponentsMapper }: Props): React.JSX.Element | null;
export default Render;

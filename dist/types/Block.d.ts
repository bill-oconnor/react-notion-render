/// <reference types="react" />
import Text from './Text';
import { blockEnum } from './BlockTypes';
import { NotionBlock } from './NotionBlock';
import { BlockComponentsMapperType } from '../constants/BlockComponentsMapper/types';
export declare class ParsedBlock {
    id: string;
    notionType: blockEnum;
    items: ParsedBlock[] | null;
    content: null | {
        text: Text[];
        checked?: boolean;
        caption?: Text[];
        type?: 'external' | 'file';
        external?: {
            url: string;
        };
        file?: {
            url: string;
        };
        url?: string;
        icon?: {
            type: 'emoji';
            emoji: string;
        };
        language?: string;
        hasColumnHeader?: boolean;
        hasRowHeader?: boolean;
        cells?: Text[][];
    };
    constructor(initialValues: NotionBlock, isChild?: boolean);
    getComponent(customMapper?: BlockComponentsMapperType): import("react").FC<import("../hoc/withContentValidation").WithContentValidationProps> | undefined;
    getUrl(): string | null;
    getType(): "LIST" | "TITLE" | "MEDIA" | "CONTAINER" | "TABLE" | "CODE" | "ELEMENT";
    getPlainText(): string;
    isList(): boolean;
    isCode(): boolean;
    isTitle(): boolean;
    isMedia(): boolean;
    isEmbed(): boolean;
    isContainer(): boolean;
    isTable(): boolean;
    equalsType(type: blockEnum): boolean;
    addItem(block: NotionBlock): void;
    hasContent(): string | number | boolean;
    supportCustomComponents(): boolean;
}
export type SimpleBlock = {
    id: string;
    type: blockEnum;
    text: Text[] | undefined;
    plainText: string;
    subItems?: SimpleBlock[];
};

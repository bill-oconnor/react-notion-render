import { blockEnum } from '..';
import { ClassnamesType } from '../constants/BlockComponentsMapper/types';
import Text from '../types/Text';
export declare function getClassname(annotations: Text['annotations']): string;
export declare function blockTypeClassname(notionType: blockEnum): string;
export declare function blockTypeCustomClassname(notionType: blockEnum, classnameMapping: ClassnamesType): string;

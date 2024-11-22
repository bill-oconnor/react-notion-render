import React from 'react';
import { WithContentValidationProps } from '.';
export declare function getMediaProps(props: WithContentValidationProps): {
    name: string;
    extension: string;
    alt: string;
    src: string;
} | undefined;
export declare function getDefaultProps(props: WithContentValidationProps): {
    checked: boolean;
    plainText: string;
    children: React.JSX.Element[] | undefined;
    language: string | undefined;
    index: import("../../types/Block").SimpleBlock[] | undefined;
    blockComponentsMapper: import("../..").BlockComponentsMapperType | undefined;
};

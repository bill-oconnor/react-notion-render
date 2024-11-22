import React from 'react';
export interface Props {
    url: string;
    children: React.ReactNode;
    className?: string;
}
declare function Link({ url, children, className }: Props): React.JSX.Element;
export default Link;

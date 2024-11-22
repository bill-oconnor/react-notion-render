import React from 'react';
export declare function getPlayer(src: string, alt: string, className?: string): any;
declare const PLAYERS: {
    youtube: (url: string, title: string, className?: string) => React.JSX.Element;
    googleDrive: (url: string, title: string, className?: string) => React.JSX.Element;
};
export default PLAYERS;

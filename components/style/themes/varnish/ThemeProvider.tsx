import React from 'react';
import { ThemeProvider as SCThemeProvider } from 'styled-components';

import { DefaultVarnishTheme } from './DefaultVarnishTheme';

// eslint-disable-next-line import/prefer-default-export
export const ThemeProvider = (props: {
    theme?: typeof DefaultVarnishTheme;
    children: React.ReactNode | React.ReactNodeArray;
}) => {
    const vTheme = props.theme || DefaultVarnishTheme;

    return (
        <SCThemeProvider theme={vTheme}>
            <>{props.children}</>
        </SCThemeProvider>
    );
};

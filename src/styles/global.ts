/*!
 * Copyright (C) 2018-2020  Zachary Kohnen (DusterTheFirst)
 */

import { createGlobalStyle } from "styled-components";

/** The global styles for all of the app */
const GlobalStyles = createGlobalStyle`
    body,
    html {
        margin: 0;
        padding: 0;
        font-family: 'Open Sans', sans-serif;
        overflow: auto;
        width: 100%;
        height: 100%;
    }
`;

export default GlobalStyles;
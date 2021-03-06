import { createGlobalStyle } from "styled-components";
import { device } from "./device";
const GlobalStyles = createGlobalStyle`

    a {
        text-decoration : none;
        color : inherit;
    }
    /* font-family : 'Noto Sans KR', sans-serif; */
    /* @font-face { font-family: 'Arita-dotum-Medium'; src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_one@1.0/Arita-dotum-Medium.woff') format('woff'); font-weight: normal; font-style: normal; } */
    /* @font-face { font-family: 'GmarketSansMedium'; src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2001@1.1/GmarketSansMedium.woff') format('woff'); font-weight: normal; font-style: normal; } */
    * {
        box-sizing : border-box;
        font-family: 'Noto Sans KR', sans-serif;
    }
    html, body, div, span, applet, object, iframe,
    h1, h2, h3, h4, h5, h6, p, blockquote, pre,
    a, abbr, acronym, address, big, cite, code,
    del, dfn, em, img, ins, kbd, q, s, samp,
    small, strike, strong, sub, sup, tt, var,
    b, u, i, center,
    dl, dt, dd, ol, ul, li,
    fieldset, form, label, legend,
    table, caption, tbody, tfoot, thead, tr, th, td,
    article, aside, canvas, details, embed, 
    figure, figcaption, footer, header, hgroup, 
    menu, nav, output, ruby, section, summary,
    time, mark, audio, video {
       margin: 0;
       padding: 0;
       border: 0;
       font-size: 14px;
       font-family : 'Noto Sans KR', sans-serif;
       /* font: inherit; */
       vertical-align: baseline;
       /* mobile-s 14px */
       /* mobile-m 16px */
       @media ${device.mobileM} {
         font-size: 16px;
       }
}
/* HTML5 display-role reset for older browsers */
    article, aside, details, figcaption, figure, 
    footer, header, hgroup, menu, nav, section {
       display: block;
    }
    body {
       line-height: 1;
       overflow-x : hidden;
    }
    ol, ul {
       list-style: none;
    }
    blockquote, q {
       quotes: none;
}
    blockquote:before, blockquote:after,
    q:before, q:after {
       content: '';
       content: none;
}
    table {
       border-collapse: collapse;
       border-spacing: 0;
}

/* width */
::-webkit-scrollbar {
  width: 10px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #f1f1f1; 
}
 
/* Handle */
::-webkit-scrollbar-thumb {
  background: #888; 
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #555; 
}

`;
export default GlobalStyles;

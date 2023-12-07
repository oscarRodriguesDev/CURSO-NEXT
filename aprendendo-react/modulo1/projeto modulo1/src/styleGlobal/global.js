import {createGlobalStyle}from 'styled-components'

export default createGlobalStyle`
*{
    margin:0;
    paddig:0;
    outline:0;
    box-sizing:border-box;
}

html, body, #root{
    min-height:100%;

}
body{
    background:#0d2636;
    font-size:14px;
    -webkit-font-smoothing:antialiased !important
}

body, input, button{
    color:#fff;
    font-size:14px;
    font-family:Arial, Helvetica,Sans-serfif;
}

Button{
    Cursor:pointer;
}

`
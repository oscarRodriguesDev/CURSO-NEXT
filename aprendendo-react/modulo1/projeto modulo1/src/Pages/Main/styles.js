import styled from 'styled-components'
export const Container =  styled.div`
max-width:700px;
background:#fff;
border-radius:4px;
box-shadow:0 0 0 20px  rgba(0,0,0,0.2);
padding:30px;
margin: 80px auto;

h1{
    font-size:20px;
    display:flex;
    align-itens:center;
    justfy-content:center
    flex-direction:row;
    color:Black;

    svg{fsdfsdfsdfasdfa
        margin-right:10px;
    }
    
}
`

export const Form = styled.form`
margin-top:30px;
display:flex;
flex-direction:row;
input{
    flex:1;
    color:black;
    border:1px solid #ddd;
    padding 10px 15px;
    border-radius:4px;
    font-size:17px;
}

`



export const SubmitButton = styled.button.attrs({
    type:'submit'
})`

background-color:#223300;
border:0;

border-radius:4px;
margin-left:10px;
padding:0 15px;
display:flex;
justify-content:center;
align-itens:center;

`
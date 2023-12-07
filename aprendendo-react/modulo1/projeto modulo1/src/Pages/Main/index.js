import React, {useCallback, useState} from "react";
import { Container, Form, SubmitButton } from "./styles";
import { FaGithub,FaPlus } from "react-icons/fa";
import api from "../../Services/api";



const Main = () => {

const [NewRepo,setNewRepo] = useState("")
const [repositorios, setRepositorios] = useState([])

//função para submeter o formularios
 const handlesubmit = useCallback((e)=>{
  e.preventDefault()

async function submit(){
  const response = await api.get(`repos/${NewRepo}`)
  const data = {
    name:response.data.full_name
  }
  setRepositorios([...repositorios,data])
  setNewRepo('')
}
submit()
 },[NewRepo,repositorios])

console.log(repositorios)
 
//função que seta o valor digitado ao state newRepo
function handleInputChange(e){
  setNewRepo(e.target.value)
  }
  

  return (
    <Container>
      <h1>
        <FaGithub size={25} />
        Meus Repositorios
      </h1>
      <Form onSubmit= {handlesubmit}>
        <input type="Text"
         placeholder= 'Selecionar Repositorios'
         value= {NewRepo}
         onChange={handleInputChange}
         />
       < SubmitButton>
       <FaPlus size = {25} color='#fff'/>
       </SubmitButton>
      </Form>
    </Container>
  );
};

export default Main;

import React,{useState,useEffect} from 'react'
import Projectbody from '../components/Projectbody'
import Header from '../components/Header'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';



import 'bootstrap/dist/css/bootstrap.min.css';
import Createbutton from '../components/Createbutton';
import javaApi from '../Api/javaApi';

function Assembler() {

  const [list,setList] = useState([]);
  let demoList = [];

  
 useEffect(() => {
  
  javaApi.ApiShowAllProject().then((response)=>{

    for(let i=0;i<response.data.length;i++){
       demoList.push(<Col><Projectbody id={response.data[i].id} projectName={response.data[i].projectName}/></Col>)
      }
       setList(demoList);
  })
 },[])
  
 
  return (
    <>
       <Header/>
       <Createbutton value='+ Create project' />
       <Container>
      
      <Row>
     {list}
     
      </Row>
    </Container> 
    <div>  

       
    </div>
   
    </>
   
  
  )
}

export default Assembler
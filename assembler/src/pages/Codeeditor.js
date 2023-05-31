import React, { useState } from "react";
import Header from "../components/Header";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { useParams } from 'react-router-dom';
import { Col } from "react-bootstrap";
import JavaApi from "../Api/javaApi";
import javaApi from "../Api/javaApi";

function Codeeditor() {


   let i=0;
  const [codeColor, setcodeColor] = useState("white");
  //code text increment
  const [code, setcode] = useState("");
  //output popup state
  const [outPut, setoutPut] = useState(false);
  //setInput popup state
  const [input, setInput] = useState(false);
  //state for memmory array
  const [outputMemmory, setoutputMemmory] = useState("");
  //state for setinputmemmory onchange
  const [inputMemmory, setinputmemmory] = useState("");
  //state for setinputvalue onchange
  const [inputValue, setinputValue] = useState("");
  //state for run by step
  const [runStep,setrunStep] = useState(false);
  //state for step incrementation for funtion
  const [increment,setincrement] = useState(0);
  //state for runby step codechange
  const [codeChange,setcodeChange] = useState("");
  //state for Registre flag
  const [Flag,setFlag] = useState("dd")
  //state for saving the code to the database
  const [saveCodePop, setsaveCodePop] = useState(false);
  //state for project name
  const [projectName, setprojectName] = useState("");

  // to get the project id in the link
  const { id } = useParams();

  if(id!==0){
 
    javaApi.GetCodeWithId(id).then((response)=>{
      setcode(response.data.codeMnmoncis)
    })
  }else{
    setcode("")
  }
  function outPutChange() {
    const jsonCode = {
      assemblyCode: code,
    };
    JavaApi.ApiPost(jsonCode).then((Response) => {
      console.log(Response);
    });

    setoutPut(true);
  }
  //function to handle setinput field
  function setInputField() {
    console.log(input);
    setInput(true);
  }

  const codeValueChange = (e) => {
    setcode(e.target.value);
  };
  //java api for memmory change and get the value from backend
  const memmoryViewChange = (e) => {
    const JsonAddress = {
      assemblyCode: e.target.value,
    };
//api where main code output is returned
    JavaApi.ApiGet(JsonAddress).then((response) => {
      console.log(response);
      setoutputMemmory(response.data);
    });
  };

  //onchange function for setmemmory
  const setInputMemmoryOnchange = (e) => {
    setinputmemmory(e.target.value);
   
  };

  const saveMemmoryValueApi = ()=>{
    
      console.log(inputMemmory,inputValue);
      const JasonMemmoryAndValue ={
        memmory:inputMemmory,
        value:inputValue
      };
      javaApi.ApiSetMemmoryValue(JasonMemmoryAndValue).then((response)=>{

        console.log(response);

      })
      
      setInput(false);
  }
  
  //onchange funtion for getting user entered value
  const setInputValueOnchange = (e)=>{
    setinputValue(e.target.value);

  };

  const setrunStepOnchange = ()=>{
    console.log('great');
  }

  const runEachStepOnclick = ()=>{
    let s = ""
    let codeSplit = code.split("\n");
 
    for(i;i<codeSplit.length;i++){

      if(increment===i){
      s = s+"\n"+codeSplit[i]+" <<------";
    }else{
      s = s+"\n"+codeSplit[i];
    }
  }
  const json = {
    assemblyCode: codeSplit[increment]
  };
  javaApi.ApiPost(json).then((response)=>{
      
    let responceData = response.data.toString();
   
     let SignFlag=responceData[0]
     let ZeroFlag=responceData[1]
     let AuxiliaryFlag=responceData[2]
     let ParityFlag=responceData[3]
     let CarryFlag=responceData[4]

     console.log(responceData)
     
     let RegisterFlag = "SignFlag: "+SignFlag+"\n"+"ZeroFlag: "+ZeroFlag+"\n"+"AuxiliaryFlag: "+AuxiliaryFlag+"\n"+"ParityFlag: "+ParityFlag+"\n"+"CarryFlag: "+CarryFlag;
     setFlag(RegisterFlag);
  })
    
    
    setincrement(increment+1);
    setcodeChange(s.trim());
    console.log(s);
   

  };

  const resetRunStepconfig = ()=>{

   javaApi.ApiClearMemmory().then((response)=>{
 
    setrunStep(false)
   });

    setincrement(0);
  };

  const saveProjectNameInState = (e)=>{
    setprojectName(e.target.value);
  };

  const saveCodeFunction =()=>{

    const saveCodeJson = {
      projectName:projectName,
      codeMnmoncis:code
    }
    javaApi.SaveCode(saveCodeJson).then((response)=>{
      console.log(response.data);
    })
    setsaveCodePop(false);
  };


  const textAreaStyle = {
    width: "-webkit-fill-available",
    background: "#262626",
    color: codeColor,
    "font-size": "x-large",
    "font-family": "monospace",
    "font-weight": "600",
    height: "480px",
    "margin-block": "18px",
    "border-radius": "7px",
    padding: "21px",
    "text-transform": "uppercase",
  };
  const setInputStyle = {
    "margin-block": "27px",
    width: "102px",
    height: "43px",
    "font-size": "smaller",
    "font-variant": "all-petite-caps",
    position: "fixed",
    "margin-left": "-110px",
  };
  const runStepStyle = {
    "margin-block": "81px",
    width: "102px",
    height: "43px",
    "font-size": "smaller",
    "font-variant": "all-petite-caps",
    position: "fixed",
    "margin-left": "-110px",
  };
  const runStyle = {
    "margin-block": "241px",
    width: "102px",
    height: "43px",
    "font-size": "smaller",
    "font-variant": "all-petite-caps",
    position: "fixed",
    "margin-left": "-110px",
  };
  const saveStyle = {
    "margin-block": "188px",
    width: "102px",
    height: "43px",
    "font-size": "smaller",
    "font-variant": "all-petite-caps",
    position: "fixed",
    "margin-left": "-110px",
  };
  const debugStyle = {
    "margin-block": "134px",
    width: "102px",
    height: "43px",
    "font-size": "smaller",
    "font-variant": "all-petite-caps",
    position: "fixed",
    "margin-left": "-110px",
  };

  return (
    <>
      <Header setInputField={setInputField} headerValues="Set Input" />
      <Container style={{ height: "678px" }}>
        <Row style={{ height: "inherit" }}>
          <Col>
            <textarea
              style={textAreaStyle}
              onChange={codeValueChange}
              value={code}
              placeholder="//MVI A,34
              STA 3000h//"
            ></textarea>
            <Button
              onClick={() => {
                setInput(true);
              }}
              className="btn btn-warning"
              style={setInputStyle}
            >
              Set Input
            </Button>
            <Button onClick={()=>{setrunStep(true)
            setcodeChange(code) }} className="btn btn-warning" style={runStepStyle}>
              Run by step
            </Button>
            <Button
              onClick={outPutChange}
              className="btn btn-success"
              style={runStyle}
            >
              Run
            </Button>
            <Button
              onClick={outPutChange}
              className="btn btn-danger"
              style={debugStyle}
            >
              Debug
            </Button>
            <Button
              onClick={()=>setsaveCodePop(true)}
              className="btn btn-primary"
              style={saveStyle}
            >
              Save
            </Button>
          </Col>
        </Row>
      </Container>

      <Modal show={outPut} onHide={() => setoutPut(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Memmory view</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Memmory</Form.Label>
              <input
                onChange={memmoryViewChange}
                placeholder="Example: 2000"
                autoFocus
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Memmory Value</Form.Label>
              <Form.Control
                placeholder={outputMemmory}
                as="textarea"
                rows={3}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => {

            setoutPut(false)}}>
            Close
          </Button>
          <Button variant="primary">Save Changes</Button>
        </Modal.Footer>
      </Modal>






      <Modal show={input} onHide={() => setInput(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Set Input</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Memmory</Form.Label>
              <Form.Control
                onChange={setInputMemmoryOnchange}
                placeholder="Type your memmory address"
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Value</Form.Label>
              <Form.Control
              onChange={setInputValueOnchange}
                placeholder="Enter your value for the address"
                as="textarea"
                
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => {
            setinputmemmory("");
            setinputValue("");
            setInput(false)}}>
            Close
          </Button>
          <Button onClick={saveMemmoryValueApi} variant="primary">Save and Close </Button>
        </Modal.Footer>
      </Modal>





      <Modal show={runStep} onHide={resetRunStepconfig}>
        <Modal.Header closeButton>
          <Modal.Title>Run Each Step</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Assembly Code</Form.Label>
              <Form.Control
                
                placeholder={codeChange}
                as="textarea"
                rows={4}
              disabled/>
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Register Flags</Form.Label>
              <Form.Control
                placeholder={Flag}
                as="textarea"
                rows={6}
                
                disabled/>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={resetRunStepconfig} variant="secondary" >
            Close
          </Button>
          <Button onClick={runEachStepOnclick}  variant="primary">Run Each Step</Button>
        </Modal.Footer>
      </Modal>










      <Modal show={saveCodePop} onHide={()=>setsaveCodePop(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Save</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Project Name</Form.Label>
              <Form.Control
                onChange={saveProjectNameInState}
                placeholder="Enter your project name"
                as="textarea"
            />
            </Form.Group>
            
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={()=>setsaveCodePop(false)} variant="secondary" >
            Close
          </Button>
          <Button onClick={saveCodeFunction}  variant="primary">Save</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Codeeditor;

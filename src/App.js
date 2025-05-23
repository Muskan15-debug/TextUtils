import { useState } from 'react';
import './App.css';
import  Navbar  from './components/Navbar';
import TextForm from './components/TextForm'
import Alert from './components/Alert';
import React from "react";


function App() {
  const [mode, setmode] = useState('light');
  const [alert, setalert] = useState(null);
  
  const showAlert =(message,type)=>{
    setalert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setalert(null);
    }, 2000);
  }
  const toggleMode=()=>{
    if(mode==='light'){
      setmode('dark');
      document.body.style.backgroundColor='#042743';
      showAlert("Dark mode has been enabled","success");
      document.title='TextUtils - Dark Mode'
    }else{
      setmode('light');
      document.body.style.backgroundColor='white';
      showAlert("Light mode has been enabled","success");
      document.title='TextUtils - Light Mode'
    }
  }
  return (
    <>
    {/*<Router>*/}
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
        <div className='container my-3'>
          {/*<Routes>
            <Route exact path="/about" element={<About/>}/>
            <Route exact path="/" element={ }/>*/}
            <TextForm heading="Enter the text to analyze" showAlert={showAlert} mode={mode}/>
          {/*</Routes>*/}
        </div>
    {/*</Router>*/} 
    </>
  );
}

export default App;

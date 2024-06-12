// import React, { useState } from 'react';
// import './App.css';
// import About from './Components/About';
// import Navbar from './Components/Navbar';
// import TextForm from './Components/TextForm';
// import Alert from './Components/Alert';
// import {
//   BrowserRouter as Router,
//   Route,
//   Switch
// } from "react-router-dom";

// function App() {
//   const [mode, setMode] = useState('light');
//   const [alert, setAlert] = useState(null);

//   const showAlert = (message, type) => {
//     setAlert({
//       msg: message,
//       type: type
//     });
//     setTimeout(() => {
//       setAlert(null);
//     }, 1500);
//   };

//   const toggleMode = () => {
//     if (mode === 'light') {
//       setMode('dark');
//       document.body.style.backgroundColor = '#042743';
//       showAlert("Dark mode has been enabled", "success");
//       document.title = 'Learn - Dark Mode';
//     } else {
//       setMode('light');
//       document.body.style.backgroundColor = 'white';
//       showAlert("Light mode has been enabled", "success");
//       document.title = 'Learn - Light Mode';
//     }
//   };


// return (
//   <>
//   <Router>
//   <Navbar title="learn" mode={mode} toggleMode={toggleMode}  />
//   <Alert alert={alert}/>
//   <div className="container my-3">
//   <Switch>
 
//         <Route exact path="/about">
//           <About mode={mode} />
//         </Route>
//         <Route exact path="/">
//           <TextForm showAlert={showAlert} heading="Enter your text to analyze" mode={mode}/>
//         </Route>
//   </Switch>
//   </div>
//   </Router>
//   </> 
// );
// }

// export default App;


import React, { useState } from 'react';
import './App.css';
import About from './Components/About';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import Alert from './Components/Alert';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled", "success");
      document.title = 'Learn - Dark Mode';
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
      document.title = 'Learn - Light Mode';
    }
  };

  return (
    <>
      <Router>
        <Navbar title="Learn" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            <Route exact path="/about" element={<About mode={mode} />} />
            <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Try To Learn - Word Counter ,Character counter ,Remove extra spaces" mode={mode} />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;

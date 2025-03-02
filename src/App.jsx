import './App.css'
// import About from './components/About.jsx'
import Alert from './components/Alert.jsx'
import Navbar from './components/Navbar.jsx'
import Textform from './components/Textform.jsx'
import { useState } from 'react'
// import { 
//   BrowserRouter as Router,
//   Route,
//   Routes
//  } from 'react-router-dom'

function App() {
  const [rows, setRows] = useState(8)
  const getWinSize = ()=>{
    window.addEventListener("load",() => {
      var getdata = window.innerWidth
      if(getdata < 600){
          setRows(4)
      }else{
          setRows(8)
      }
      })
  }
  getWinSize()
  var [theme, setTheme] = useState("default")
  const [btnMode, setBtnMode] = useState("secondary")
  const [textMode, setTextMode] = useState("dark")
  const [mode, setMode] = useState("light")
  const [alert, setAlert] = useState("")
  const myAlert = (msg, type)=>{
    setAlert({
      msg: msg,
      type: type
    })
    setTimeout(()=>{
      setAlert(null)
    }, 2000)
  }
  const handleThemeRed = () =>{
    // let target = e.target
    //   setTheme(target.innerText.toLowerCase())
    if(mode !== "light"){
      // setMode2("danger")
      setTextMode("light")
      setBtnMode("danger")
      document.body.style.backgroundColor = "#5d1017"
      document.body.style.color = "white"
      myAlert("Red Theme Dark Mode enabled", "success")
    }else{
      // setMode2("light")
      setTextMode("dark")
      setBtnMode("danger")  
      document.body.style.backgroundColor = "white"
      document.body.style.color = "black"
      myAlert("Red Theme Light Mode enabled", "success")  
    }
  }
  const handleThemeBlue = () =>{
    // let target = e.target
    // setTheme(target.innerText.toLowerCase())
    if(mode !== "light"){
      // setMode3("primary")
      setTextMode("light")
      setBtnMode("primary")
      document.body.style.backgroundColor = "#012b6a"
      document.body.style.color = "white"
      myAlert("Blue Theme Dark Mode enabled", "success")
    }else{
      // setMode3("primary")
      setTextMode("dark")
      setBtnMode("primary")  
      document.body.style.backgroundColor = "white"
      document.body.style.color = "black"
      myAlert("Blue Theme Light Mode enabled", "success")  
    }
  }
  const handleThemeGreen = () =>{
    // let target = e.target
    //   setTheme(target.innerText.toLowerCase())
    if(mode !== "light"){
      // setMode4("success")
      setTextMode("light")
      setBtnMode("success")
      document.body.style.backgroundColor = "#0a3622"
      document.body.style.color = "white"
      myAlert("Green Theme Dark Mode enabled", "success")
    }else{
      // setMode4("success")
      setTextMode("dark")
      setBtnMode("success")  
      document.body.style.backgroundColor = "white"
      document.body.style.color = "black"
      myAlert("Green Theme Light Mode enabled", "success")  
    }
  }

  const handleTheme = (e) => {
    let target = e.target
      setTheme(target.innerText.toLowerCase())
      if(mode !== "light"){
        setMode("dark")
        setTextMode("light")
        setBtnMode("light")
        document.body.style.backgroundColor = "#22262a"
        document.body.style.color = "white"
        myAlert("Dark Mode enabled", "success")
      }else{
        setMode("light")
        setTextMode("dark")
        setBtnMode("secondary")  
        document.body.style.backgroundColor = "white"
        document.body.style.color = "black"
        myAlert("Light Mode enabled", "success")  
      }
}
  const toggleMode = ()=>{
    if(theme == "default"){
      if(mode == "light"){
        setMode("dark")
        setTextMode("light")
        setBtnMode("light")
        document.body.style.backgroundColor = "#22262a"
        document.body.style.color = "white"
        myAlert("Dark Mode enabled", "success")
      }else{
        setMode("light")
        setTextMode("dark")
        setBtnMode("secondary")  
        document.body.style.backgroundColor = "white"
        document.body.style.color = "black"
        myAlert("Light Mode enabled", "success")  
      }
    }
  }
  return (
    <>
 
  {/* <Router> */}
    <Navbar title="TextUtils" mode={toggleMode} modeExtra={handleTheme} mode2={handleThemeRed} mode3={handleThemeBlue} mode4={handleThemeGreen} textMode={textMode} modeName={mode}/>
    <div style={{height: "50px"}}>
    <Alert alert={alert}/>
    </div>
    <Textform heading="Enter the text to analyze below" btnMode={btnMode} rows={rows} setAlert={myAlert} textMode={textMode} modeName={mode}/>
    {/* <Routes>
      <Route index element={<Textform heading="Enter the text to analyze below" btnMode={btnMode} setAlert={myAlert} textMode={textMode} modeName={mode}/>} />
      <Route exact path='/about' element={ <About/>}/>
    </Routes> */}
  {/* </Router> */}
  
    </>
  )
}

export default App

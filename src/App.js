import React, { useState } from "react";
import Navbar from "./navbar";
import News from "./news";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import LoadingBar from "react-top-loading-bar";


function App(){
   const [Progress,setProgress]=useState({
    progress:10
   });
const barColor= "#f11946";
const newsApi=  process.env.REACT_APP_NEWS_API_KEY

   function ProgressUpdate(progress){
      setProgress({progress:progress});
   }  
    return(<>
    <Router>
       <Navbar /> 
       <LoadingBar color={barColor} progress={Progress.progress} />
       <Routes>
          <Route path="/" element={<News setprogress={ProgressUpdate} newsApi={newsApi} page={1} key="general" pagesize={10} category={"general"} country={"in"}/>}></Route>
          <Route path="/bussiness" element={<News setprogress={ProgressUpdate} newsApi={newsApi} page={1} key="bussiness" pagesize={10} country={"in"} category={"business"}/>} ></Route>
          <Route path="/technology" element={<News setprogress={ProgressUpdate} newsApi={newsApi} page={1} pagesize={10} key="technology" country={"in"} category={"technology"}/>}></Route>
          <Route path="/science" element={<News setprogress={ProgressUpdate} newsApi={newsApi} page={1} pagesize={10} key="science" country={"in"}  category={"science"}/>}></Route>
          <Route path="/sports" element={<News setprogress={ProgressUpdate} newsApi={newsApi} page={1} pagesize={10} key="sports" country={"in"} category={"sports"}/>}></Route>

        </Routes>
      
    </Router>
      
    </>
      
    )
  }

export default App;
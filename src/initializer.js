import React from "react"
import { useState } from 'react';
import axios from 'axios';
import App from "./App";



export default function Initializer(){
  const [userInfo, setUserInfo] = useState(null);
  const [allRegions,setAllRegions]=useState(null);
  const [allOS,setAllOS]=useState(null);

  function loadProfile(res){
    console.log(res.data.firstname)
    setUserInfo(res.data);
  }
  function loadOS(res){
    setAllOS(res.data)
  }

  function loadRegion(res){
    setAllRegions(res.data)
  }
  function errorHandling(error){
    
  }
  if(! userInfo){
  axios.get("/JSONS/user-info.json").then(loadProfile).catch(errorHandling);
  axios.get("/JSONS/regions.json").then(loadRegion).catch(errorHandling);
  axios
    .get("/JSONS/operating-systems.json")
    .then(loadOS)
    .catch(errorHandling);
  }
  if(userInfo && allRegions && allOS){
  return(
    <App regions={allRegions} userInfo={userInfo} operatingSystems={allOS}/>
  )
  }
}
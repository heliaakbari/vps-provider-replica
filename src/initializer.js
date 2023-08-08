import React from "react"
import { useState } from 'react';
import axios from 'axios';
import App from "./App";



export default function Initializer(){
  const [userInfo, setUserInfo] = useState(null);
  const [allRegions,setAllRegions]=useState(null);
  const [allOS,setAllOS]=useState(null);

  function loadProfile(res){
    setUserInfo(res.data);
  }
  function loadOS(res){
    setAllOS(res.data)
  }

  function loadRegion(res){
    setAllRegions(res.data)
  }
  function errorHandling(error){
    alert(error);
  }
  if(! userInfo){
  axios.get("https://assignment.abrnoc.com/user-info").then(loadProfile).catch(errorHandling);
  axios.get("https://assignment.abrnoc.com/regions").then(loadRegion).catch(errorHandling);
  axios
    .get("https://assignment.abrnoc.com/operating_systems")
    .then(loadOS)
    .catch(errorHandling);
  }

  if(userInfo && allRegions && allOS){
  return(
    <App regions={allRegions} userInfo={userInfo} operatingSystems={allOS}/>
  )
  }
}
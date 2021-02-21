import React, { useEffect, useState } from 'react'
import LeftSideMenu from "../components/LeftSideMenu";
import RightSideMenuList from "../components/RightSideMenuList";

const  HomeScreen =() => {
  return (
      <div className="main-container">
          <LeftSideMenu/>
          <RightSideMenuList/>      
      </div>
  );
}
export default HomeScreen;

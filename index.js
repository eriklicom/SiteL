




import React from "react";
import Heading from "component/Head";
import Mein from "component/Mein";


function HomePage(){
  return (
    <div className="">
      <Heading/>
      <div className="">
        <Mein url="{location.href}"/>
      </div>
    </div>
  )
}

 //   <div className=""></div>

export default HomePage











"scripts": {
  "start": "index.js"
}
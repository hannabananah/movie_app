import React from "react";
import { Link } from "react-router-dom";

import "./Header.css";

export default function Header() {
   return (
      <div className="header_area">
         <Link to="./">
            <h1 className="logo"><span>H</span><span>A</span><span>N</span><span>N</span><span>A</span><span>H</span> </h1>
         </Link>
         <div className="Iam">

            <p>This is</p>
            <b>
               <div className="innerIam">
                  <span>what I made</span><br />
                  stunning<br />
                  movies<br />
                  App<br />
                  <span>for your life</span>
               </div>
            </b>
         </div>
      </div>
   )
}
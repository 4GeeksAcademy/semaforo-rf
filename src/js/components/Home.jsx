import React from "react";
import  { useState } from 'react';

//create your first component
const Home = () => {
	const [luzColor, setluzColor] = useState("amarillo");

	return (
		<div className="text-center">
		    <div className="cable"> </div>
			<div className="semaforo">

				<div className={"luz rojo " + (luzColor=="rojo" ? "on": "")} onClick={()=>setluzColor("rojo")}></div>
				<div className={"luz amarillo " + (luzColor=="amarillo" ? "on": "")} onClick={()=>setluzColor("amarillo")}></div>
				<div className={"luz verde " + (luzColor=="verde" ? "on": "")} onClick={()=>setluzColor("verde")}></div>

			</div>

			
            

			
		</div>
	);
};

export default Home;
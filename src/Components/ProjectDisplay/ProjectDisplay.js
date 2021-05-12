import React from 'react';
import './ProjectDisplay.scss';


const ProjectDisplay = ({project}) => {

	return (
		<div id="projectDisplay" className="project_container center">

			<h3 className="subHead">[Vivid Design Studios]</h3>

		  <h1 className="project_header ml2">{project.Client.toUpperCase()}</h1>
			<span className="gray ma0">--------------------------</span>
			<p className="black ph5" style={{fontFamily:"Open Sans Condensed",fontSize:'20px',textAlign:'left'}}>{project.des}</p>
			<div className="grid">
			{
				project.pic.map((item,index)=>{
					return(
					<div className="gridimage" key={index}>
						<img className="image-class" style={{objectFit:'cover'}} src={item}/>
						<div className="opacity_div"></div>
					</div>
				)
				})

			}


   </div>
	</div>

	)
}

export default ProjectDisplay;

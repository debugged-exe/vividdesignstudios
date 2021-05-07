import React from 'react';
import './ProjectDisplay.scss';
import {Projects} from '../../Databases/Projects.js';

const ProjectDisplay = ({project}) => {
	return (
		<div id="projectDisplay" className="project_container center">

			<h3 className="subHead">[Vivid Design Studios]</h3>

		  <h1 className="project_header">{project.Client.toUpperCase()}</h1>
			<span className="gray ma0">--------------------------</span>
			<div className="grid">
			{
				project.pic.map((item,index)=>{
					return(
					<div className="gridimage" key={index}>
						<img className="image-class" src={item}/>
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

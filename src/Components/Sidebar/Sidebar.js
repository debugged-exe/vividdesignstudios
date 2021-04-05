import React, {useState} from 'react'
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import './Sidebar.scss';
import {SidebarData} from './SidebarData.js';
import SubMenu from './SubMenu.js';
import ReactLogo from '../../logo.svg';

const Sidebar = () => {

	const [sidebar, setSidebar] = useState(false);

	const showSidebar = () => {
		setSidebar(!sidebar);
	}

	return (
		<div className="sidebar-container">
			<div className="nav" style={{display: `${sidebar?'none':'flex'}`}}>
				<FaIcons.FaBars size={25} onClick={showSidebar} />
			</div>
			<div className="sidebar-nav" style={{left: `${sidebar?'0':'-100%'}`}}>
				<div className="sidebar-wrap">
					<div className="nav-cross">
						<AiIcons.AiOutlineClose size={25} onClick={showSidebar} />
					</div>
					<img src={ReactLogo} alt="React Logo" style={{width: '65%', margin:'10px'}}/>
					{
						SidebarData.map((item,index) => {
							return(
								<SubMenu key={index} item={item} />
							);
						})
					}
				</div>
			</div>
		</div>

	)
}

export default Sidebar
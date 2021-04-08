import React, {useState} from 'react'
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import './Sidebar.scss';
import {SidebarData} from './SidebarData.js';
import SubMenu from './SubMenu.js';
import {ReactComponent as ReactLogo} from '../../logo.svg';
import Logo from '../../logo.svg';

const Sidebar = () => {

	const [sidebar, setSidebar] = useState(false);

	const showSidebar = () => {
		setSidebar(!sidebar);
	}

	return (
		<div className="sidebar-container">
			<div className="nav shadow-2" style={{display: `${sidebar?'none':'flex'}`}}>
				<div className="logo-container">
					<ReactLogo style={{width: '50px', height: '50px'}}/>
					<p className="logo-title">Vivid Design Studios</p>
				</div>
				<FaIcons.FaBars size={25} onClick={showSidebar} />
			</div>
			<div className="sidebar-nav" style={{left: `${sidebar?'0':'-100%'}`}}>
				<div className="sidebar-wrap">
					<div className="nav-cross">
						<AiIcons.AiOutlineClose size={25} onClick={showSidebar} />
					</div>
					<img src={Logo} alt="React Logo" style={{width: '65%', margin:'10px'}}/>
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

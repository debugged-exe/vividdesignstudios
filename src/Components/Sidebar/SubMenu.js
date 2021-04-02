import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import './SubMenu.scss';

const SubMenu = ({item}) => {

	const [subnav, setSubNav] = useState(false);

	const showSubNav = () => setSubNav(!subnav);

	return(
		<>
			<Link className="sidebar-link" to={item.path} onClick={item.subNav && showSubNav}>
				<div className="sidebar-label">
					<span className="icon">
						{item.icon}
					</span>
					<span className='title'>{item.title}</span>
					<span className="drop-icon">
						{
							item.subNav && subnav
							? item.iconOpened
							: item.subNav
							? item.iconClosed
							: null
						}
					</span>
				</div>
			</Link>
			{subnav && item.subNav.map((item,index) => {
				return(
					<Link className="dropDown-link" to={item.path} >
						<span className="dropdown-icon">
							{item.icon}
						</span>
						<span className='drop-title'>{item.title}</span>
					</Link>
				);
			})}
		</>
	);
}

export default SubMenu;
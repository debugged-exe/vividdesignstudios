import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as BsIcons from 'react-icons/bs';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';
import * as GrIcons from 'react-icons/gr';

export const SidebarData = [
{
	title: 'Home',
	path: '/',
	icon: <AiIcons.AiFillHome />
},
{
	title: 'Categories',
	path: '/#category',
	icon: <FaIcons.FaListUl />,
	iconClosed: <RiIcons.RiArrowDownSFill />,
	iconOpened: <RiIcons.RiArrowUpSFill />,
	subNav: [
		{
			title: 'Residential',
			path: '/residential/#residential',
			icon: <BsIcons.BsFillPeopleFill/>
		},
		{
			title: 'Commercial',
			path: '/commercial/#commercial',
			icon: <RiIcons.RiRestaurant2Fill/>
		}
	]
},
{
	title: 'About Us',
	path: '/aboutus',
	icon: <FaIcons.FaInfo />
},
{
	title: 'Contact Us',
	path: '/aboutus/#contactus',
	icon: <IoIcons.IoIosCall />
},
]

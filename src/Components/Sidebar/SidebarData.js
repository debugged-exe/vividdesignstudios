import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';
import * as GrIcons from 'react-icons/gr';

export const SidebarData = [
{
	title: 'Categories',
	path: '/categories',
	icon: <FaIcons.FaListUl />,
	iconClosed: <RiIcons.RiArrowDownSFill />,
	iconOpened: <RiIcons.RiArrowUpSFill />,
	subNav: [
		{
			title: 'Cat1',
			path: '/categories/#cat1',
			icon: <IoIcons.IoIosPaper />
		},
		{
			title: 'Cat2',
			path: '/categories/#cat2',
			icon: <IoIcons.IoIosPaper />
		}
	]
},
{
	title: 'Our Projects',
	path: '/projects',
	icon: <GrIcons.GrProjects />
},
{
	title: 'About Us',
	path: '/aboutus',
	icon: <FaIcons.FaInfo />
},
{
	title: 'Collabs',
	path: '/collabs',
	icon: <FaIcons.FaUserFriends />
},
{
	title: 'Contact Us',
	path: '/contact',
	icon: <IoIcons.IoIosCall />
},
]
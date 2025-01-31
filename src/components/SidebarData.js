
import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import EmailIcon from '@mui/icons-material/Email';
import Acnt from '@mui/icons-material/AccountCircle';
import ManageT from '@mui/icons-material/ManageAccounts';
// import dp from './Images/dp.png'
export const SidebarData=[

    
    {
        icon:<HomeIcon/>,
        title:"Home",
        link:"/dashboard/"
    }, {
        icon:<ManageT/>,
        title:"Manage Teachers",
        link:"/dashboard/manageTeachers"
    }, {
        icon:<LibraryBooksIcon/>,
        title:"Manage Courses",
        link:"/dashboard/manageCourses"
    },
    {
        icon:<Acnt/>,
        title:"My Profile",
        link:"/dashboard/profile"
    }

]
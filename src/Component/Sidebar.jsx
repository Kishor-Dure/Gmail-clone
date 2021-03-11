import React from 'react'
import './Sidebar.css';
import { Button, IconButton } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import SidebarOption from './SidebarOption';
import InboxIcon from '@material-ui/icons/Inbox';
import StarIcon from '@material-ui/icons/Star';
import LabelImportantIcon from '@material-ui/icons/LabelImportant';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import NearMeIcon from '@material-ui/icons/NearMe';
import NoteIcon from '@material-ui/icons/Note';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import PersonIcon from '@material-ui/icons/Person';
import DuoIcon from '@material-ui/icons/Duo';
import PhoneIcon from '@material-ui/icons/Phone';
import { useDispatch } from 'react-redux';
import { openSendMessage } from '../features/mailSlice';

function Sidebar() {
    const dispatch = useDispatch();

    return (
        <div className='sidebar'>
            <Button startIcon={<AddIcon fontSize='large'/>}
            className='sidebar__compose'
            onClick={()=>dispatch(openSendMessage())}
            >
                Compose
            </Button>
            <SidebarOption Icon={InboxIcon}
            selected={true} title='Inbox' number={54} />
            <SidebarOption Icon={StarIcon} title='Fav' number={20} />
            <SidebarOption Icon={LabelImportantIcon} title='Important' number={20} />
            <SidebarOption Icon={AccessTimeIcon} title='Snoozed' number={20} />
            <SidebarOption Icon={NearMeIcon} title='Sent' number={20} />
            <SidebarOption Icon={NoteIcon} title='Drafts' number={20} />
            <SidebarOption Icon={ExpandMoreIcon} title='More' number={20} />

            <div className='sidebar__footer'>
                <div className="sidebar__footerIcon">
                    <IconButton>
                        <PersonIcon />
                    </IconButton>
                    <IconButton>
                        <DuoIcon />
                    </IconButton>
                    <IconButton>
                        <PhoneIcon />
                    </IconButton>
                </div>
            </div>
        </div>
    )
}

export default Sidebar;

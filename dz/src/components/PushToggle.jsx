import React                from 'react';

import NotificationsIcon    from '@material-ui/icons/Notifications';
import NotificationsOffIcon from '@material-ui/icons/NotificationsOff';

import '../style/PushToggle.css';


const PushToggle = (props) => {  
    return (        
        <div className="push" >
            <NotificationsIcon className="push__image" style={{ display: 'block' }} /> 
            <NotificationsOffIcon className="push__image_off" style={{ display: 'none' }} />     
        </div>
    )
}

export default PushToggle;


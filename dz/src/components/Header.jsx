import React    from 'react';

import { Link } from 'react-router-dom';

import Button   from '@material-ui/core/Button';

import '../style/Header.css';


const Header = ({chatId=1}) => {

    return (
        <div className='container'>
            <Link to='/profile/'>
                <Button color="primary">Profile</Button>
            </Link>            
            <span style={ { fontSize: '20px' } }>Чат { chatId }</span>            
        </div>
    )
};

export default Header;
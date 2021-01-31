import React             from 'react';

import { Link }          from 'react-router-dom';

import {connect}         from 'react-redux';

import Button            from '@material-ui/core/Button';

import '../style/Header.css';


const Header = ({ chatId=1, profileStore }) => {

    return (
        <div className='container'>
            <Link to='/profile/'>
                <Button color="primary">Profile</Button>
            </Link>            
            <span style={ { margin: '10px' } }>Name: {profileStore.name}</span>
            <span style={ { margin: '10px' } }>Age: {profileStore.age}</span>            
            <span style={ { fontSize: '20px' } }>Чат { chatId }</span>            
        </div>
    )
};


const mapStateToProps = ({ profileReducer }) => ({
    profileStore: profileReducer.profile[1],
});

export default connect(mapStateToProps, null)(Header);
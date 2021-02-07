import React                  from 'react';

import { push }               from 'connected-react-router';
import { bindActionCreators } from "redux";
import {connect}              from 'react-redux';

import Button                 from '@material-ui/core/Button';

import '../style/Header.css';


const Header = ({ chatId=1, profileStore, push }) => {
    const handleNavigate = (link) => push(link);

    return (
        <div className='container'>
            <Button color="primary" onClick={() => handleNavigate('/profile/')} >Profile</Button>

            <span style={ { margin: '10px' } }>Name: {profileStore.name}</span>
            <span style={ { margin: '10px' } }>Age: {profileStore.age}</span>            
            <span style={ { fontSize: '20px' } }>Чат { chatId }</span>            
        </div>
    )
};


const mapStateToProps = ({ profileReducer }) => ({
    profileStore: profileReducer.profile,
});

const mapDispatchToProps = (dispatch) => bindActionCreators({ push },
    dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Header);
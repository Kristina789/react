import React, { useEffect }   from 'react';

import { push }               from 'connected-react-router';
import { bindActionCreators } from "redux";
import {connect}              from 'react-redux';

import CircularProgress       from '@material-ui/core/CircularProgress';
import Button                 from '@material-ui/core/Button';

import { loadProfile }        from '../store/actions/profileActions';

import '../style/Header.css';


const Header = ({ chatId=1, isLoading, profileStore, loadProfile, push }) => {
    const handleNavigate = (link) => push(link);

    useEffect(() => {
        loadProfile();

        /*fetch('../api/profile.json'
        ).then(body => body.json()).
        then(json => {
            json.forEach(val => {
                addToProfile(val);
            })
        }) --- загрузка через fetch
        */
    }, [])


    if (isLoading) return <CircularProgress />
    else {
        return (
            <div className='container'>
                <Button color="primary" onClick={() => handleNavigate('/profile/')} >Profile</Button>

                <span style={ { margin: '10px' } }>Name: { profileStore.name }</span>
                <span style={ { margin: '10px' } }>Age: { profileStore.age }</span>            
                <span style={ { fontSize: '20px' } }>Чат { chatId }</span>            
            </div>
        )
    }
    
};


const mapStateToProps = ({ profileReducer }) => ({
    profileStore: profileReducer.profile[1],
    isLoading: profileReducer.isLoading,
});

const mapDispatchToProps = (dispatch) => bindActionCreators({ loadProfile, push },
    dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Header);
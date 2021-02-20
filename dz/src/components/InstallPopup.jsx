import React, { useEffect } from 'react';
import CloseIcon           from '@material-ui/icons/Close';

import '../style/InstallPopup.css';


const InstallPopup = (props) => {
    let isShown = false;

    useEffect(() => {
        // Определяем, является ли устройство iPhone-ом
        const isIos = () => {
            const userAgent = window.navigator.userAgent.toLowerCase();
            
            return /iphone/.test(userAgent);
        };

        // Определяем, запущено ли приложение отдельно
        const isInStandaloneMode = () => ('standalone' in window.navigator) && (window.navigator.standalone);

        // Решаем, показать или не показать уведомление об установке:
        if (isIos() && !isInStandaloneMode()) {
            handleShow();
        }
    }, [])

    const handleShow = () => {
        isShown = true;
    };

    const handleHide = () => {
        isShown = false;
    };
        
    return (        
        <>                
            <div style={ { display: isShown ? 'block' : 'none' } }
                className="speech-bubble-container" >
                <div className="speech-bubble">
                    <CloseIcon className="close-install-message-icon" onClick={ handleHide } />
                    <div style={ { paddingRight: '15px' } }>Установи приложение
                        на свой iPhone: нажми «Поделиться», а затем на экран «Домой»
                    </div>
                </div>
            </div>
        </>
    )
}

export default InstallPopup;
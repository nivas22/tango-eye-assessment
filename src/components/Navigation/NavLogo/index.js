import React from 'react';
import Aux from "../../../hoc/_Aux";
import miniLogo from '../../../assets/images/logo.svg';
import { useApp as uiApp } from '../../../contexts/UI';

const navLogo = () => {
    const {
        onToggleNavigation,
        uiState: { collapseMenu }
    } = uiApp();

    let toggleClass = ['mobile-menu'];
    if (collapseMenu) {
        toggleClass = [...toggleClass, 'on'];
    }

    return (
        <Aux>
            <div className="navbar-brand header-logo">
                 <a href="#" className="b-brand">
                    <img src={miniLogo} height="40" width="40" alt="Service"/>
                    <div>
                        <p className='b-title-new'>Tango Eye</p>
                </div>
                 </a>
                <a href="#" className={toggleClass.join(' ')} id="mobile-collapse" onClick={onToggleNavigation}><span /></a>
            </div>
        </Aux>
    );
};

export default navLogo;

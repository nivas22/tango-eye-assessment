import React from 'react';
import NavLeft from "./NavLeft";
import NavRight from "./NavRight";
import Aux from "../../hoc/_Aux";
import { useApp as uiApp } from '../../contexts/UI';
import miniLogo  from '../../assets/images/logo.svg';

const NavBar = () => {
    const {
        uiState: { headerFixedLayout, collapseMenu, headerBackColor, rtlLayout },
        onToggleNavigation
    } = uiApp();

    let headerClass = ['navbar', 'pcoded-header', 'navbar-expand-lg', headerBackColor];
    if (headerFixedLayout) {
        headerClass = [...headerClass, 'headerpos-fixed'];
    }

    let toggleClass = ['mobile-menu'];
    if (collapseMenu) {
        toggleClass = [...toggleClass, 'on'];
    }

    return (
        <Aux>
            <header className={headerClass.join(' ')}>
                <div className="m-header">
                    <a className={toggleClass.join(' ')} id="mobile-collapse1" href='#' onClick={onToggleNavigation}><span/></a>
                    <a href='#' className="b-brand">
                        <img src={miniLogo} height="40" width="40" alt="Service"/>
                        <span className="b-title">Tango Eye</span>
                    </a>
                </div>
                <a className="mobile-menu" id="mobile-header" href='#'><i className="feather icon-more-horizontal"/></a>
                <div className="collapse navbar-collapse">
                    <NavLeft/>
                    <NavRight rtlLayout={rtlLayout} />
                </div>
            </header>
        </Aux>
    );
}

export default NavBar;
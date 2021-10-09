import React, { useEffect } from 'react';
import { useApp as uiApp } from '../../contexts/UI';
import Aux from '../../hoc/_Aux'
import useWindowDimensions from '../../utils/useWindowDimensions';
import navigation from '../../menu';
import NavContent from './NavContent';
import NavLogo from './NavLogo';
import OutsideClick from './OutsideClick';

const Navigation = () => {
    const { width } = useWindowDimensions();
    
    const {
        onToggleNavigation,
        onChangeLayout,
        uiState: { collapseMenu, layout, preLayout, layoutType, navBackColor, navBackImage, navBrandColor, navActiveListColor, navDropdownIcon, navListIcon,
            navListTitleColor, navListTitleHide, navIconColor, navFixedLayout, rtlLayout, boxLayout }
    } = uiApp();

    useEffect(() => {
        if (layout === 'horizontal' && width < 992) {
            onChangeLayout('vertical');
        }
    }, []);

    let naviContents = navigation
    let navClass = [
        'pcoded-navbar',
    ];

    if (preLayout !== null && preLayout !== '' && preLayout !== 'layout-6' && preLayout !== 'layout-8') {
        navClass = [...navClass, preLayout];
    } else {
        navClass = [
            ...navClass,
            layoutType,
            navBackColor,
            navBrandColor,
            'drp-icon-'+navDropdownIcon,
            'menu-item-icon-'+navListIcon,
            navActiveListColor,
            navListTitleColor,
        ];

        if (layout === 'horizontal') {
            navClass = [...navClass, 'theme-horizontal'];
        }

        if (navBackImage) {
            navClass = [...navClass, navBackImage];
        }

        if (navIconColor) {
            navClass = [...navClass, 'icon-colored'];
        }

        if (!navFixedLayout) {
            navClass = [...navClass, 'menupos-static'];
        }

        if (navListTitleHide) {
            navClass = [...navClass, 'caption-hide'];
        }
    }

    if (width < 992 && collapseMenu) {
        navClass = [...navClass, 'mob-open'];
    } else if (collapseMenu) {
        navClass = [...navClass, 'navbar-collapsed'];
    }

    if (preLayout === 'layout-6') {
        document.body.classList.add('layout-6');
        // document.body.style.backgroundImage = layout6Background;
        // document.body.style.backgroundSize = layout6BackSize;
    }

    if (preLayout === 'layout-8') {
        document.body.classList.add('layout-8');
    }

    if (layoutType === 'dark') {
        document.body.classList.add('datta-dark');
    } else {
        document.body.classList.remove('datta-dark');
    }

    if (rtlLayout) {
        document.body.classList.add('datta-rtl');
    } else {
        document.body.classList.remove('datta-rtl');
    }

    if (boxLayout) {
        document.body.classList.add('container');
        document.body.classList.add('box-layout');
    } else {
        document.body.classList.remove('container');
        document.body.classList.remove('box-layout');
    }

    let navContent = (
        <div className="navbar-wrapper">
            <NavLogo collapseMenu={collapseMenu} width={width} onToggleNavigation={onToggleNavigation}/>
            <NavContent navigation={naviContents.items} />
        </div>
    );

    if (width < 992) {
        navContent = (
            <OutsideClick>
                <div className="navbar-wrapper">
                    <NavLogo collapseMenu={collapseMenu} width={width} onToggleNavigation={onToggleNavigation} />
                    <NavContent navigation={naviContents.items} />
                </div>
            </OutsideClick>
        );
    }


    return (
        <Aux>
            <nav className={navClass.join(' ')}>
                {navContent}
            </nav>
        </Aux>
    );

}

export default Navigation;
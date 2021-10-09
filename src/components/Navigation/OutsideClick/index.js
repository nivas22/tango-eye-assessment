import React, { useRef, useEffect } from 'react';
import useWindowDimensions from '../../../utils/useWindowDimensions';
import { useApp as uiApp } from '../../../contexts/UI';

const OutsideClick = ({ children }) => {
    const wrapperRef = useRef(null);
    const { width } = useWindowDimensions();
    const {
        onToggleNavigation,
        uiState: { collapseMenu }
    } = uiApp();

    const handleOutsideClick = (event) => {
        const wrapper = wrapperRef.current;
        if (wrapper && !wrapper.contains(event.target)) {
            if (width < 992 && collapseMenu) {
                onToggleNavigation();
            }
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleOutsideClick);
        return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
        };
    }, [collapseMenu]);


    return <div className="nav-outside" ref={wrapperRef}>{children}</div>;
}

export default OutsideClick;
import React, { createContext } from 'react';
import * as actionTypes from './actions';
import config from '../../config';
const UIContext = createContext();

const initialState = {
    isOpen: [], //for active default menu
    isTrigger: [], //for active default menu, set blank for horizontal
    ...config,
    isFullScreen: false
};

function reducer(state = initialState, action) {
    let trigger = [];
    let open = [];

    switch (action.type) {
        case actionTypes.COLLAPSE_MENU:
            return {
                ...state,
                collapseMenu: !state.collapseMenu
            };
        case actionTypes.COLLAPSE_TOGGLE:
            if (action.menu.type === 'sub') {
                open = state.isOpen;
                trigger = state.isTrigger;

                const triggerIndex = trigger.indexOf(action.menu.id);
                if (triggerIndex > -1) {
                    open = open.filter(item => item !== action.menu.id);
                    trigger = trigger.filter(item => item !== action.menu.id);
                }

                if (triggerIndex === -1) {
                    open = [...open, action.menu.id];
                    trigger = [...trigger, action.menu.id];
                }
            } else {
                open = state.isOpen;
                const triggerIndex = (state.isTrigger).indexOf(action.menu.id);
                trigger = (triggerIndex === -1) ? [action.menu.id] : [];
                open = (triggerIndex === -1) ? [action.menu.id] : [];
            }

            return {
                ...state,
                isOpen: open,
                isTrigger: trigger
            };
        case actionTypes.NAV_CONTENT_LEAVE:
            return {
                ...state,
                isOpen: open,
                isTrigger: trigger,
            };
        case actionTypes.NAV_COLLAPSE_LEAVE:
            if (action.menu.type === 'sub') {
                open = state.isOpen;
                trigger = state.isTrigger;

                const triggerIndex = trigger.indexOf(action.menu.id);
                if (triggerIndex > -1) {
                    open = open.filter(item => item !== action.menu.id);
                    trigger = trigger.filter(item => item !== action.menu.id);
                }
                return {
                    ...state,
                    isOpen: open,
                    isTrigger: trigger,
                };
            }
            return {...state};
        case actionTypes.FULL_SCREEN :
            return {
                ...state,
                isFullScreen: !state.isFullScreen
            };
        case actionTypes.FULL_SCREEN_EXIT:
            return {
                ...state,
                isFullScreen: false
            };
        case actionTypes.CHANGE_LAYOUT:
            return {
                ...state,
                layout: action.layout
            };
        default:
            return state;
    }
};

function UIProvider(props) {
    const [uiState, dispatch] = React.useReducer(reducer, initialState);
    const value = React.useMemo(() => [uiState, dispatch], [uiState]);
    return <UIContext.Provider value={value} {...props} />;
}

function useApp() {
    const context = React.useContext(UIContext);
    if (!context) {
        throw new Error(`useApp must be used within a AppProvider`);
    }
    const [uiState, dispatch] = context;

    /**
     * dispatch actions
     */
    const dispatches = ([...reducers]) => {
        reducers.forEach(item => {
            const [type, payload] = item;
            dispatch({ type, payload });
        });
    };

    const onFullScreen = async () => {
        dispatch({ type: actionTypes.FULL_SCREEN });
    };

    const onToggleNavigation = async () => {
        dispatch({ type: actionTypes.COLLAPSE_MENU });
    };

    const onChangeLayout = async (layout) => {
        dispatch({ type: actionTypes.CHANGE_LAYOUT, layout: layout})
    }


    return {
        uiState,
        onFullScreen,
        onChangeLayout,
        onToggleNavigation
    }
}

export { UIProvider, useApp };

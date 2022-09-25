import React, { useState } from 'react';
import { PopupTypes } from '../@types/popupTypes';

type PopupState = { isVisible: boolean, type: PopupTypes };
type PopupContextType = {
    popupState: PopupState
    setPopupState: React.Dispatch<React.SetStateAction<PopupState>>
}

const initialState: PopupState = { isVisible: false, type: "Add Task" }

export const PopupContext = React.createContext<PopupContextType>({} as PopupContextType);

export const PopupProvider = ({ children }: { children: React.ReactNode }) => {
    const [popupState, setPopupState] = useState<PopupState>(initialState)

    return (
        <PopupContext.Provider value={{ popupState, setPopupState }}>
            {children}
        </PopupContext.Provider>
    )
}
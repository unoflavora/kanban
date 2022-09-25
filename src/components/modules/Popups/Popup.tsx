import React from 'react';
import AddTask from './types/PopupAddTask';
import { PopupTypes } from '../../../@types/popupTypes';

export const Popups = (type: PopupTypes): React.ReactNode => {
    switch (type) {
        case "Add Task": return <AddTask />
    }
}

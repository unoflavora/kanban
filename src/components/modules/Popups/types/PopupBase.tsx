import { useEffect, useRef, useContext } from 'react';
import styled from "styled-components"
import ReactDOM from "react-dom"
import { PopupContext } from '../../../../context/PopupContext';

const PopupDiv = styled.div`
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    height: 100vh;
    width: 100vw;
`

const PopupBg = styled.div`
    position: absolute;
    background-color: black;
    opacity: 0.3;
    height: 100%;
    width: 100%;
`

const PopupDisplay = styled.div`
    background-color: ${props => props.theme.foreground};
    opacity: 1;
    width : 75%;
    height: fit-content;
    padding: 2em;
    z-index: 2;
    border-radius: .5em;
`

const PopupBase = ({ children }: { children: React.ReactNode }) => {
    const { popupState, setPopupState } = useContext(PopupContext)
    const ref = useRef<HTMLDivElement>(null);

    const modalRoot = document.getElementById("modal-root")
    const div = document.createElement('div');

    useEffect(() => {
        modalRoot?.appendChild(div);
        return () => { modalRoot?.removeChild(div) }
    }, []);

    useEffect(() => {
        function handleClickOutside(e: MouseEvent) {
            if (ref.current && !ref.current.contains(e.target as Node)) {
                if (popupState.isVisible) {
                    setPopupState({ ...popupState, isVisible: false })
                }
            }
        }
        document.addEventListener("mousedown", handleClickOutside)
        return () => document.removeEventListener("mousedown", handleClickOutside)
    }, [ref])

    return ReactDOM.createPortal(
        <PopupDiv>
            <PopupBg />
            <PopupDisplay ref={ref}>
                {children}
            </PopupDisplay>
        </PopupDiv>, div
    )
}
export default PopupBase
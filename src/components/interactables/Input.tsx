import { HTMLInputTypeAttribute } from "react";
import styled from "styled-components";

export const FormInput = styled.div`
    display: flex;
    flex-direction: column;
    gap: .8em;
    min-width: 75%;
`

export const FormInputTitle = styled.h1`
    font-family: ${props => props.theme.font};
    color: ${props => props.theme.colors.mediumGrey};
    font-weight: 600;
    font-size: .9em;
    text-align: left;
`

export const FormInputArea = styled.input`
    font-family: ${props => props.theme.font};
    min-height: ${props => props.height ? props.height : ""};
    min-width: 90%;
    border: 2px solid rgba(130, 143, 163, .25);
    padding: 0.5em 1em;
    border-radius: .3em;
    font-size: 1em;
    color: black;
    font-weight: 500;
    ::placeholder {
        opacity: .4;
        font-size: .9em;
        color: ${props => props.theme.colors.mediumGrey}
    }
`

type InputProps = {
    type: HTMLInputTypeAttribute;
    placeholder?: string;
    formTitle?: string;
    attr?: React.HTMLAttributes<HTMLInputElement>;
}
export function Input({ type, formTitle, placeholder, attr = {} }: InputProps) {
    return (
        <FormInput>
            {formTitle && <FormInputTitle>{formTitle}</FormInputTitle>}
            <FormInputArea {...attr} placeholder={placeholder} type={type} />
        </FormInput>
    );
}

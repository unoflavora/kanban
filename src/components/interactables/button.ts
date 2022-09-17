import styled, { StyledProps } from "styled-components";
import { device } from '../../theme/device';

const buttonStyle = {
    colors: {
        primary: "#ffffff",
        secondary: "#635FC7",
        destructive: "#ffffff"
    },
    background: {
        primary: "#635FC7",
        secondary: "rgba(99, 95, 199, 0.1)",
        destructive: "#EA5555",
    },
    background_hover: {
        primary: "#A8A4FF",
        secondary: "rgba(99, 95, 199, 0.25)",
        destructive: "#FF9898"
    }
}

type ButtonComponentProps = {
    typeName: "primary" | "secondary" | "destructive",
    fontSize?: "large" | "regular"
}

const propAttribute = (props: StyledProps<ButtonComponentProps>, attr: keyof typeof buttonStyle) => {
    return buttonStyle[attr][props.typeName];
}

export const Button = styled.button<ButtonComponentProps>`
    font-family: 'Plus Jakarta Sans', sans-serif;
    font-weight: 700;
    text-align: center;
    margin: 1em;
    border-radius: 9999px;
    border: 0;
    color: ${(props) => propAttribute(props, 'colors')};
    background-color: ${props => propAttribute(props, 'background')};
    &:hover {
        background-color: ${props => propAttribute(props, "background_hover")};
    }

    @media ${device.mobile} {
        font-size: ${props => props.fontSize === 'large' ? '1em' : '.8em'};
        padding: 0.35em 2em;
    }

    @media ${device.tablet} {
        font-size: ${props => props.fontSize === 'large' ? '1.5em' : '1.2em'};
        padding: 0.5em 3em;
    }

    @media ${device.laptop} {
        font-size: ${props => props.fontSize === 'large' ? '4em' : '1.6em'};
        padding: 0.5em 3em;
    }

`

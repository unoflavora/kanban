import styled, { StyledProps } from "styled-components";
import { device } from '../../styles/device';

const buttonStyle = {
    colors: {
        primary: "#ffffff",
        secondary: "#635FC7",
        destructive: "#ffffff"
    },
    background_hover: {
        primary: "#A8A4FF",
        secondary: "rgba(99, 95, 199, 0.25)",
        destructive: "#FF9898"
    }
}

type ButtonComponentProps = {
    typeName: "primary" | "secondary" | "destructive",
    fontSize?: "large" | "regular",
    children: string;
}

const propAttribute = (props: StyledProps<ButtonComponentProps>, attr: keyof typeof buttonStyle) => {
    return buttonStyle[attr][props.typeName];
}

export const Button = styled.button<ButtonComponentProps>`
    font-family: ${props => props.children.toString().length < 2 && "sans-serif"};
    text-align: center;
    border-radius: 9999px;
    border: 0;
    color: ${(props) => propAttribute(props, 'colors')};
    background-color: ${props => props.theme["colors"][props.typeName]};

    &:hover {
        background-color: ${props => propAttribute(props, "background_hover")};
    }

    @media ${device.mobile} {
        font-size: ${props => props.fontSize === 'large' ? '1.3rem' : '.9rem'};
        padding: ${props => props.children.toString().length > 2 ? ".8rem 1rem" : ".1rem .8rem"};
    }

    @media ${device.tablet} {
        font-size: ${props => props.fontSize === 'large' ? '1.5em' : '1.2em'};
        padding: 0.5em 3em;
    }

    @media ${device.laptop} {
        font-size: ${props => props.fontSize === 'large' ? '4em' : '1.6em'};
        padding: 0.5em 1.5em;
    }

`

import styled from "styled-components";
import { Button } from "@interactables/Button";
import { ReactComponent as Logo } from "@assets/Logo.svg"
import { ReactComponent as Dropdown } from "@assets/Dropdown.svg"
import { ReactComponent as Hamburger } from "@assets/Hamburger.svg"

const Navbar = styled.nav`
    background-color: ${props => props.theme.foreground};
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 1rem;
`

const Home = styled.div`
    background-color: ${props => props.theme.colors.lightGrey};
    height: 100vh;
`

const Title = styled.title`
    font-size: .9rem;
    font-weight: 900;
    padding: 0;
    display: flex;
    gap: .5rem;
`

const NavbarTitle = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: .6rem 0rem;
`

const Main = styled.main`
    height: 80%;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-items: center;
    justify-content: center;
    color: ${props => props.theme.colors.mediumGrey};
    font-weight: 600;
    text-align: center;
    padding: 0 1.4rem;
`

const Options = styled.div`
    display: flex;
    flex-direction: row;
    gap: .6rem;
`

export default function HomeComponent() {
    return (
        <Home>
            <Navbar>
                <NavbarTitle>
                    <Logo />
                    <Title>
                        Platform Launch
                        <button><Dropdown /></button>
                    </Title>
                </NavbarTitle>
                <Options>
                    <Button typeName='primary' fontSize="large">+</Button>
                    <button><Hamburger /></button>
                </Options>
            </Navbar>

            <Main>
                This board is empty. Create a new column to get started
                <Button typeName="primary">+ Add New Column</Button>
            </Main>
        </Home>
    )
}
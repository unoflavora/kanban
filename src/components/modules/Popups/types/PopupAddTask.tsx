import styled from 'styled-components';
import { FormInput, Input } from "@Interactables/Input";
import { FormInputTitle } from '../../../Interactables/Input';
import { Button } from '@Interactables/Button';
import Dropdown from '@assets/Dropdown.svg';
import { ReactComponent as Close } from "@assets/Close.svg"
import PopupBase from './PopupBase';

const Title = styled.h1`
    font-weight: 800;
    font-size: 1.4em;
    text-align: left;
`

const FormArea = styled.form`
    display: flex;
    flex-direction: column;
    gap: 1.5em;
`

const Subtasks = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1em;
`

const SubtaskItem = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const Desc = styled.textarea`
    font-family: ${props => props.theme.font};
    min-width: 90%;
    border: 2px solid rgba(130, 143, 163, .25);
    padding: 0.5em 1em;
    border-radius: .3em;
    font-size: 1em;
    color: black;
    font-weight: 500;
    min-height: 5em;
    ::placeholder {
        opacity: .4;
        font-size: .9em;
        color: ${props => props.theme.colors.mediumGrey}
    }
`

const Option = styled.select`
    font-family: ${props => props.theme.font};
    border: 2px solid rgba(130, 143, 163, .25);
    padding: 0.5em;
    border-radius: .3em;
    font-size: 1em;
    color: black;
    font-weight: 500;
    -moz-appearance:none; /* Firefox */
    -webkit-appearance:none; /* Safari and Chrome */
    appearance:none;
    background-image: url(${Dropdown});
    background-repeat: no-repeat;
    background-position: right .7em top 50%;
    background-size: .65em auto, 100%;
    ::placeholder {
        opacity: .4;
        font-size: .9em;
        color: ${props => props.theme.colors.mediumGrey}
    }
`

function Subtask({ placeholder = "" }: { placeholder: string }) {
    return <SubtaskItem>
        <Input type={"text"} placeholder={placeholder} attr={{ style: { minWidth: "100%", } }} />
        <button>
            <Close />
        </button>
    </SubtaskItem>;
}

export default function AddTask() {
    return (
        <PopupBase>
            <FormArea>
                <Title>Add New Task</Title>

                <Input type={"text"} formTitle={"Title"} placeholder={"e.g. Take a coffee break"} />

                <FormInput>
                    <FormInputTitle>Description</FormInputTitle>
                    <Desc placeholder={"e.g. It’s always good to take a break. This 15 minute break will  recharge the batteries a little."} />
                </FormInput>

                <Subtasks>
                    <FormInputTitle>Subtasks</FormInputTitle>
                    <Subtask placeholder='e.g Make coffee' />
                    <Subtask placeholder='e.g Drink coffee and smile' />
                    <Button style={{ fontWeight: "700" }} typeName={"secondary"}> + Add New Subtask </Button>
                </Subtasks>

                <FormInput>
                    <FormInputTitle>Status</FormInputTitle>
                    <Option />
                </FormInput>

                <Button typeName={"primary"}>Create Task</Button>
            </FormArea>
        </PopupBase>
    )
}





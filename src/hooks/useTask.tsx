import { useReducer, useState } from "react";
import data from '../../public/data.json'

type Boards = typeof data.boards
type Board = typeof data.boards[0];
type Task = typeof data.boards[0]["columns"][0]["tasks"]

type Action =
    | { type: "Add Task" | "Edit Task" | "Delete Task", payload: Task }
    | { type: "Add Board" | "Edit Board" | "Delete Board", payload: Board }


const reducer = (state: Boards, action: Action): Boards => {
    switch (action.type) {
        case "Add Board":
            return [...state, action.payload]
        default:
            return state
    }
}

export const useTask = () => {
    const [boards, dispatch] = useReducer(reducer, data.boards)

    return [boards, dispatch]
}
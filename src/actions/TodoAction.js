import axios from "axios";

export const todoFetch = () => {

    return dispatch => {

        axios.get("http://localhost:3000/todo").then(res => {
            dispatch({ type: "todo_fetch", payload: res.data })
        });
    }

}


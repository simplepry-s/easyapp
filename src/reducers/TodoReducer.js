

export default function (state = [], action) {
    switch (action.type) {
        case "todo_fetch":
            return action.payload;
        default:
            return state;
    }
}


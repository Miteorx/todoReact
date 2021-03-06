const Todo = props => (
    <li>
        <input type="checkbox" checked={props.todo.check}/>
        <button onClick={props.onDelete}>Delete</button>
        <span>{props.todo.text}</span>
    </li>
)

let id = 0;

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: [{id: 991, text: "task1", check: true},
                {id: 992, text: "task2", check: false},
                {id: 993, text: "task3", check: true}]
        }
    }

    addTodo() {
        const text = promt("add todo");
        this.setState({todos: [...this.state.todos, {id: id++, text: text, check: false}]})
    }

    deleteTodo(id) {
        this.setState({
            todos: this.state.todos.filter(todo => todo.id != id)
        })
    }

    changeTodo(id){
        this.setState({todos: this.state.todos.map(todo => todo.id == id ? {...todo, check: !todo.check} : todo)})
    }


    render() {
        return (
            <div>
                <h2>My TODO app</h2>
                <div>Todod count: {this.state.todos.length}</div>
                <div>unchecked Todod count: {this.state.todos.filter(todo => !todo.check).length}</div>
                <button onClick={() => this.addTodo()}>Add todo</button>
                <ul>
                    {this.state.todos.map(todo => <Todo
                        onDelete={() => this.deleteTodo(todo.id)}
                        onChange={() => this.changeTodo(todo.id)}
                        todo={todo} />)}
                </ul>
            </div>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById("root"));
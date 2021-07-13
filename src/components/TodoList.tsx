import React, { useEffect } from 'react'
import { useAction } from '../hooks/useActions'
import { useTypedSelector } from '../hooks/useTypedSelector'

const TodoList: React.FC = () =>  {
    const {error, limit, loading, page, todos} = useTypedSelector(state => state.todo)
    const {fetchTodos, setTodoPage} = useAction()
    const pages = [1, 2, 3, 4, 5]

    useEffect(() => {
        fetchTodos(page, limit)
    }, [page, limit])

    if (loading) {
        return <h1>Loading...</h1>
    }

    if (error) {
        return <h1>Error: {error}</h1>
    }

    return (
        <div>
            {todos.map(todo => (
                <div key={todo.id}>
                    {todo.id}: {todo.title} [{todo.completed ? '+' : '-'}]
                </div>
            ))}
            <hr/>
            <div style={{display:"flex", flexDirection: 'row'}}>
                {pages.map(p => (
                    <div style={{border: p === page ? '2px solid green' : '2px solid gray', 
                        padding: '5px', 
                        width: '16px', 
                        marginRight: '4px', 
                        textAlign: "center"}}
                        onClick={() => setTodoPage(p)}    
                    >
                        {p}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default TodoList

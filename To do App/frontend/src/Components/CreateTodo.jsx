export function CreateTodo(){
    return (
        <>
        <div>
        <input style={
            {
                margin:10,
                padding:10,
            }
        } type="" placeholder="enter the titile of todo.." />
        <br />
     
        <input 
        style={{
            margin:10,
            padding:10,
        }}
        type="" placeholder="enter the description of todo.." />
        <br />
        <button
         style={{
            margin:10,
            padding:10,
        }}
        > Add a todo</button>
        </div>
        </>
    )
}
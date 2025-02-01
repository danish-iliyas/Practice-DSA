// import React, { useState } from 'react'

// const Todo = () => {
//     const [valu, setValue] = useState("") // For input value
//     const [list, setList] = useState([])  // For storing list of todos
//     const [isEditing, setIsEditing] = useState(false) // Track editing mode
//     const [editIndex, setEditIndex] = useState(null)  // Index of the todo being edited

//     // Handle adding a new todo or saving an edited todo
//     const handleClick = () => {
//         if (valu.trim()) {
//             if (isEditing) {
//                 // Update an existing todo if we are in editing mode
//                 updateTodo()
//             } else {
//                 // Add a new todo if not in editing mode
//                 setList([...list, valu])
//             }
//             setValue("") // Clear input after add/edit
//         }
//     }

//     // Update an existing todo
//     const updateTodo = () => {
//         const updatedList = list.map((item, index) =>
//             index === editIndex ? valu : item // Update the todo at the edit index
//         )
//         setList(updatedList)
//         setIsEditing(false) // Exit edit mode
//         setEditIndex(null) // Reset the edit index
//     }

//     // Handle deleting a todo
//     const handleDelete = (i) => {
//         const updatedList = list.filter((_, index) => index !== i)
//         setList(updatedList)
//     }

//     // Start editing a todo
//     const handleEdit = (i) => {
//         setIsEditing(true) // Set editing mode
//        setEditIndex(i) // Set the index of the todo being edited
//         setValue(list[i]) // Set the value of the input field to the todo being edited
//     }

//     return (
//         <div style={{ display: "flex", flexDirection: "column", height: "50vh", width: "50vw", background: "" }}>
//             <h3>To Do</h3>
//             <input
//                 type="text"
//                 placeholder="Enter work"
//                 style={{ width: "200px", padding: "4px" }}
//                 value={valu}
//                 onChange={(e) => setValue(e.target.value)} // Set input value on change
//             />
//             <button
//                 style={{ width: "80px", margin: "2px", backgroundColor: "royalblue" }}
//                 onClick={handleClick} // Add or update todo on button click
//             >
//                 {isEditing ? "Save Changes" : "Add"}
//             </button>
//             <div style={{ display: "flex" }}>
//                 <div>
//                     <ul>
//                         {list.map((ele, i) => (
//                             <li key={i}>
//                                 {ele}
//                                 <button onClick={() => handleEdit(i)}>Edit</button>
//                                 <button onClick={() => handleDelete(i)}>Delete</button>
//                             </li>
//                         ))}
//                     </ul>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default Todo

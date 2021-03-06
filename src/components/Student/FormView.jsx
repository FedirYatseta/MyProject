import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Button, Form, Modal, Table } from 'react-bootstrap'

const FormView = (props) => {


    const [users, setUsers] = useState([])
    debugger;
    const [toDoTitle, setTodoUsers] = useState(props.userData)

    const updateTodo = e => {
        if(!e )
        setUsers([...users,
            {
            id: toDoTitle.id,
            name: toDoTitle.name}
        ])
    }
    return (
        <div>
            <Form>
                <div className=" col-sm-12 col-md-12 " style={{ marginTop: '50px', margin: 'auto', wordBreak: 'break-word' }} >
                    <Table className="table"><tbody>
                        <tr><th><b>S.No</b></th><th><b>NAME</b></th><th><b>ADDRESS </b></th><th><b>EMAIL</b></th><th><b>CONTACT</b></th><th><b>GENDER</b></th><th><b>Edit</b></th><th><b>Delete</b></th></tr>
                        {props?.userData?.map((item, index) => (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{item?.name}</td>
                                <td>{item?.address}</td>
                                <td>{item?.email}</td>
                                <td>{item?.contact}</td>
                                <td>{item?.gender}</td>
                                <td>
                                    <NavLink to={'/changeUser/' + item._id}>
                                        <Button onClick={() =>updateTodo(props.id)} variant="primary" secondary className="btn btn-success" >Edit</Button>
                                    </NavLink>
                                </td>
                                <td>
                                    <Button onClick={(e) => { props.delUser(item._id)}} secondary className="btn btn-info">Delete</Button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                    </Table>
                </div>
            </Form>


        </div>



    )
}

export default FormView
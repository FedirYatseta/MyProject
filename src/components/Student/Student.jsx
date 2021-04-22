import React from 'react'
import  FormCrud  from "../Formhook/form";
import FormEdit from './FormEdit/FormEdit'
import {Link} from 'react-router-dom';
import {Button,Form, Table} from 'react-bootstrap'
let Student = (props) => {
    debugger;
    return (
        <div style={{ marginTop: '50px' }}>
            <p className="text-center" style={{ fontSize: '25px' }}><b> CRUD Operation Using React, Nodejs, Express, MongoDB</b></p>
            <FormCrud createUserThunk={props.createUserThunk} />
            
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
                                    <Button as={Link} to={`/changePost/:${item._id}`} secondary className="btn btn-success" >Edit</Button>
                                </td>
                                <td>
                                    <Button as={Link} onClick={(e) => { props.delUser(item._id) }} secondary className="btn btn-info">Delete</Button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                    </Table>
                </div>
            </Form>
        </div>
    );

}

export default Student
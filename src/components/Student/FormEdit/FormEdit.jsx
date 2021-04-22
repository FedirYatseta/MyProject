import React, {useState,useEffect} from 'react'
import { Button,Modal ,Table} from 'react-bootstrap';
import {getStudentId} from '../../../redux/StudentPageReducer'

let FormEdit = (props) => {
  debugger;
 let userID = getStudentId();
    return (
      <Table className="table">
        <tbody>
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
                  <Button  secondary className="btn btn-success" >Save</Button>
              </td>
              <td>
                  <Button  secondary className="btn btn-info">Cancel</Button>
              </td>
          </tr>
      ))}
  </tbody>
  </Table>
    );
  }
  
   export default FormEdit


   
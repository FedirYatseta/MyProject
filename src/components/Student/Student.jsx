import React from 'react'
import FormCrud  from "../Formhook/form";
import FormView from './FormView'

let Student = (props) => {
    debugger;
    return (
        <div style={{ marginTop: '50px' }}>
            <p className="text-center" style={{ fontSize: '25px' }}><b> CRUD Operation Using React, Nodejs, Express, MongoDB</b></p>
            <FormCrud createUserThunk={props.createUserThunk} />
            <FormView {...props} />
              </div>
    );

}

export default Student
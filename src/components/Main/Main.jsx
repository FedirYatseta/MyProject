import React from 'react';
import BlogContainer from "../Blog/BlogContainer"
import Teams from "../Teams/Teams"
import { Route } from 'react-router';
import ProjectContainerPage from "../Project/ProjectContainer"
import Contact from '../Contact/Contact';
import PartnerContainer from '../Partners/PartnerContainer';
import StudentContainer from '../Student/StudentContainer'
import FormEdit from '../Student/FormEdit/FormEdit'

const Main = () => {

    return (
            <div className='app-container'>
                <Route path="/main" render={() => <PartnerContainer />} />
                <Route path="/project" render={() => <ProjectContainerPage />} />
                <Route path="/teams" render={() => <Teams />} />
                <Route path="/blog" render={() => <BlogContainer />} />
                <Route path="/users" render={() => <StudentContainer />} />
                <Route path="/contact" render={() => <Contact />} />
                <Route path="/changeUser/:id" render={ () => <FormEdit /> }/>
            </div>
    )
}
export default Main;
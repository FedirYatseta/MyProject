import React from 'react';
import { NavLink } from 'react-router-dom';
import s from "./Main.module.css"
import BlogContainer from "../Blog/BlogContainer"
import Teams from "../Teams/Teams"
import { Route } from 'react-router';
import ProjectContainerPage from "../Project/ProjectContainer"
import Contact from '../Contact/Contact';
import PartnerContainer from '../Partners/PartnerContainer';

const Main = () => {

    return (
        <div >
            <div className='app-container'>
                <Route path="/main" render={() => <PartnerContainer />} />
                <Route path="/project" render={() => <ProjectContainerPage />} />
                <Route path="/teams" render={() => <Teams />} />
                <Route path="/blog" render={() => <BlogContainer />} />
                <Route path="/contact" render={() => <Contact />} />
            </div>
        </div>
    )
}
export default Main;
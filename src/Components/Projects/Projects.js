import React from 'react';
import './Projects.css';
import { Tabs, Tab } from 'react-bootstrap';
import Evedent from './Evedent/Evedent';
import DataStickers from './DataStickers/DataStickers';
import NotaryWebsite from './NotaryWebsite/NotaryWebsite';


const Projects = () => {

  return (
    <div className="contentContainer">
			<h4 id="Projects" className="pt-4" style={{ fontWeight: "bolder" }}>Projects <i className="fas fa-cogs ms-2"></i></h4>
      <hr />

      <Tabs defaultActiveKey="evedent" id="project-tabs" className="mb-4 w-100 pe-4 pt-4 mt-4">
        <Tab eventKey="evedent" title="Evedent">
          <Evedent />
        </Tab>
        <Tab eventKey="datastickers" title="Data Stickers">
          <DataStickers />
        </Tab>
        <Tab eventKey="notarywebsite" title="Notary Website">
          <NotaryWebsite />
        </Tab>
      </Tabs>
    </div>
  );
};

export default Projects;
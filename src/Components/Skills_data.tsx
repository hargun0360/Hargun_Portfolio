
import amazon from "../Assets/icons8-amazon-web-services.svg"
import azure from "../Assets/icons8-azure.svg"
import bootstrap from "../Assets/icons8-bootstrap.svg"
import c from "../Assets/icons8-c.svg"
import css from "../Assets/icons8-css.svg"
import docker from "../Assets/icons8-docker.svg"
import express from "../Assets/icons8-express-js (1).svg"
import figma from "../Assets/icons8-figma.svg"
import firebase from "../Assets/icons8-firebase.svg"
import git from "../Assets/icons8-git.svg"
import html from "../Assets/icons8-html.svg"
import javascript from "../Assets/icons8-javascript.svg"
import jest from "../Assets/icons8-jest-can-collect-code-coverage-information-from-entire-projects-96.png"
import mongodb from "../Assets/icons8-mongodb.svg"
import node from "../Assets/icons8-node-js.svg"
import react from "../Assets/icons8-react.svg"
import redis from "../Assets/icons8-redis.svg"
import redux from "../Assets/icons8-redux.svg"
import sass from "../Assets/icons8-sass.svg"
import typescript from "../Assets/icons8-typescript.svg"


function Skills_data (){
    const skills = 
        {
            frontend : [javascript , typescript , react , redux , html , css , figma , sass],
            backend : [node , express , jest , docker],
            databases : [mongodb , redis , firebase],
            others : [git , c , bootstrap , amazon , azure],
        }
    
    return skills;
}

export default Skills_data;
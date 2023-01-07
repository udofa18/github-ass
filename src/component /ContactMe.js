import React from "react"
import { Helmet } from "react-helmet"
import {AiFillLinkedin} from 'react-icons/ai'
import {AiFillGithub} from 'react-icons/ai'
import {AiFillTwitterCircle} from 'react-icons/ai'
import {FaTelegram} from 'react-icons/fa'
import {GrContact} from 'react-icons/gr'




function Contact() {
    return (
    <div>
     <Helmet>
        <title>Contact</title>
        <meta name="descripiton" content="Daniels Github Contact page"/>
      <meta name="Keywords" content="Github, Daniel, Repositories, Dveloper, contact"/>
    </Helmet>
    <div className=" mx-8 space-x-4 my-8 text-5xl text-orange-400">
    <GrContact/>
    </div>
        <h1 className="text-emerald-400 text-2xl text-center">Contact Daniel Udofa Using the Following Social Media Handles:</h1>
        <ul className="flex gap-5 justify-center my-8">
        <a href="https://www.linkedin.com/in/daniel-udofa-865778149/">
            <li className="my-3 flex items-center text-2xl  hover:text-slate-900">
            <AiFillLinkedin/>
                Linkedin
            </li></a>
            <a href="https://github.com/udofa18">
            <li className="my-3 flex items-center text-2xl  hover:text-slate-900"> 
            <AiFillGithub/>
                GitHub
            </li></a>
            <a href="https://twitter.com/Udofa18">
            <li className="my-3 flex items-center text-2xl hover:text-slate-900">
            <AiFillTwitterCircle/>
                Twitter
            </li></a>
            <a href="https://t.me/phantom6040">
            <li className="my-3 flex items-center text-2xl hover:text-slate-900">
            <FaTelegram/>
                Telegram
            </li></a>
            
        </ul>
    </div>
    
    )}
    export default Contact


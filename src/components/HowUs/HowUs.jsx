import React from 'react';
import "./HowUs.scss";
import img from "../img/profile.png";
import circle from "../img/circle.svg";
import { motion } from "framer-motion";
import { CgWebsite } from "react-icons/cg";
import { SiGmail, SiWhatsapp } from "react-icons/si";
import { AiFillLinkedin, AiOutlineInstagram ,AiOutlineClose,AiFillGithub } from "react-icons//ai";
import { useStateContext } from '../../context/stateContext';
const HowUs = () => {

    const {setShowUs} = useStateContext();
    return (
        
        <div className='us-container' >
           
            <div className='inner-container' animate={{x:-60}}>
            
                <motion.div
                    whileInView={{ opacity: [0, 1] }}
                    transition={{ duration: 0.5, delayChildren: 0.5 }}
                    className="us-img"
                >
                    <img src={img} alt="profile" />
                    <motion.img
                        whileInView={{ scale: [0, 1] }}
                        transition={{ duration: 1, ease: 'easeInOut' }}
                        src={circle}
                        alt="circle"
                        className="overlay_circle"
                    />
                </motion.div>
                <motion.div whileInView={{ x: [-100, 0], opacity: [0, 1] }} transition={{ duration: 0.5 }} className='us-details'>
                
                    <div className='iden'>
                        <div className='name'>
                            <p >Hello, I am</p>
                            <h1 >Zain</h1>
                        </div>
                        <div className='work'>
                            <p >Web Developer ,</p>
                            <p >Aeronautical Technical Engineering</p>
                        </div>
                    </div>

                    <div className='contact'>
                        <div className='protofolio'>
                            <p>see my  Protofilo <CgWebsite />    </p>
                            <a href='https://zain-protfolio.netlify.app/'>
                                :  Zain.Protofilo
                            </a>
                        </div>
                        <h1><span>&</span> contact with me</h1>
                        <div className='icon'>
                            <a href='https://www.linkedin.com/in/zainualabdden/'><AiFillLinkedin /> </a>
                            <a href='https://instagram.com/zain__.98?igshid=YmMyMTA2M2Y='><AiOutlineInstagram/></a>
                            <a href="mailto:zain2alabdeen2@gmail.com"><SiGmail /></a>
                            <a href="tel:+(964)7830078942" className="p-text"><SiWhatsapp/></a>
                            <a href='https://github.com/Zain-ali0'><AiFillGithub/></a>
                        </div>
                    </div>
                </motion.div>
                <h1 className='close' onClick={() => setShowUs(false)}><AiOutlineClose/></h1>
            </div>
        </div>
    )
}

export default HowUs
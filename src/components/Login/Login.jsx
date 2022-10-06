import React, { useRef } from 'react';
import "./Login.scss";
import login from "../img/login.webp"
import { SiGmail, SiWhatsapp } from "react-icons/si";
import { AiFillLinkedin, AiOutlineInstagram ,AiFillGithub } from "react-icons//ai";
import { motion } from 'framer-motion';

const Login = () => {

    const user = useRef();
    const password = useRef();

    const FormSumbit = () => {
        if (user.current.value === '1' && password.current.value === '2') {
            localStorage.setItem('User', '1')
            localStorage.setItem('password', '2')
        }
    }
    return (
        <div className='form'>
            <form onSubmit={FormSumbit}>
                <div className='img'><img src={login}/></div>
                <motion.div className='input' whileInView={{ x: [-100, 0], opacity: [0, 1] }} transition={{ duration: 0.5 }}>
                    <div>
                        <input type='text' placeholder='اسم المستخدم' ref={user} />
                    </div>
                    <div>
                        <input type='password' placeholder='كلمة المرور' ref={password} />
                    </div>
                    <button>تسجيل الدخول</button>
                </motion.div>
            </form>
            <h1 class="footer"> created by <a href="https://github.com/Zain-ali0">Zain</a> &copy; copyright @ 2022</h1>
            <div className='icon'>
                <a href='https://www.linkedin.com/in/zainualabdden/'><AiFillLinkedin /> </a>
                <a href='https://instagram.com/zain__.98?igshid=YmMyMTA2M2Y='><AiOutlineInstagram /></a>
                <a href="mailto:zain2alabdeen2@gmail.com"><SiGmail /></a>
                <a href="tel:+(964)7830078942" className="p-text"><SiWhatsapp /></a>
                <a href='https://github.com/Zain-ali0'><AiFillGithub /></a>
            </div>
        </div>

    )
}

export default Login;
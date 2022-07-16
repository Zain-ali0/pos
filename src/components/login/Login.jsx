import React,  {useRef} from 'react';
import "./Login.scss";
import img from "../../image/img-removebg-preview.png";


const Login = () => {

    const user = useRef();
    const password = useRef();

    const FormSumbit = () => {
        if(user.current.value === '1' && password.current.value === '2'){
            localStorage.setItem('User' , '1')
            localStorage.setItem('password','2')
        }
        
    }
    return (
        <div className='form'>
            <form onSubmit={FormSumbit}>
                <div className='img'><img src={img} alt='img' /></div>
                <div className='input'>
                    <div>
                        <input type='text' placeholder='اسم المستخدم' ref={user} />
                    </div>
                    <div>
                        <input type='password' placeholder='كلمة المرور'  ref={password}/>
                    </div>
                    <button>تسجيل الدخول</button>
                </div>
            </form>
        </div>

    )
}

export default Login
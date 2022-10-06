import React from 'react'
import { useStateContext } from '../../context/stateContext';
import "./calucater.scss";
import { AiOutlineClose } from "react-icons/ai"
import { motion } from 'framer-motion';



const Calculator = () => {

    const { craeteDigits , updateCalc ,calc,result,calculate ,deletList ,setShowCalc} = useStateContext();

    return (
        <>

            <motion.div  animate={{x:-60}} className='clau'>
                <div className='close-clac' >
                    <AiOutlineClose onClick={() => setShowCalc(false)}/>
                </div>
                <div className='display'>
                    <h3>{calc || ' 0'}</h3>
                    {result ? <span>{result}</span> : ''}
                </div>

                <div className='operators'>
                    <button onClick={() => updateCalc('/')}>/</button>
                    <button onClick={() => updateCalc('-')}>-</button>
                    <button onClick={() => updateCalc('*')}>x</button>
                    <button onClick={() => updateCalc('+')}>+</button>
                    <button onClick={() => deletList()}>DEL</button>
                </div>

                <div className='digits'>
                    {craeteDigits()}
                    <button onClick={() => updateCalc('0')}>0</button>
                    <button onClick={() => updateCalc('.')}>.</button>
                    <button onClick={() =>calculate()} >=</button>
                </div>
            </motion.div>
        </>

    )
}

export default Calculator;
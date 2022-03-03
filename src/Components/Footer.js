import React from 'react'

const Footer = ({ setTheme }) => {
    return (
        <div className='footer'>
            <div onClick={() => {
                setTheme('school-days')
            }} className='footer-item'>School Days</div>
            <div onClick={() => {
                setTheme('neon-nights')
            }} className='footer-item'>Neon Nights</div>
            <div onClick={() =>{
                setTheme('kauai')
            }} className='footer-item'>Kauai</div>
            <div onClick={() => {
                setTheme('boring')
            }} className='footer-item'>Boring</div>
        </div>
    )
}



export default Footer
import React from 'react'
import Menu from './Menuapi'

const Navbar = ({filterfun,navList}) => {
  return (
   <>
       <nav className='navbar justify-content-center'>
       <div className='btn-group'>
       {/* <button className='btn-group__item' onClick={()=>{navHome()}}>Home</button>  */}
        {navList.map((currEle)=>{
            return(
            <button className='btn-group__item' onClick={()=>{filterfun(currEle)}}>{currEle}</button> )
        })}
        {/* <button className='btn-group__item' onClick={()=>{filterfun("breakfast")}}>Breakfast</button> */}
        {/* <button className='btn-group__item' onClick={()=>{filterfun("lunch")}}>Lunch</button> */}
        {/* <button className='btn-group__item' onClick={()=>{filterfun("evening")}}>Evening</button> */}
        {/* <button className='btn-group__item' onClick={()=>{filterfun("dinner")}}>Dinner</button> */}
      </div>
    </nav>
   </>
  )
}

export default Navbar
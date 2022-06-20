
import React from 'react'
import "./style.css"
import Menu from './Menuapi'
import Menucard from './Menucard'
import Navbar from './Navbar'
const navapi= [...new Set(
  Menu.map((currEle)=>{
    return currEle.category;
  })
),"All"]
const Restaurant = () => {
  const [menuData,setMenuData]=React.useState(Menu)
  const [navList,setNavList]=React.useState(navapi)
  const choosemeal = (category)=>{
    if(category=="All"){
      
      setMenuData(Menu);
      return;
    }
    const updateList=Menu.filter((curr)=>{
        return curr.category==category

    })
        return(setMenuData(updateList))
  }
 
  return (
    <>
    <Navbar filterfun={choosemeal} navList={navList}/>
    <Menucard apidata={menuData} />
    </>
  )
}

export default Restaurant
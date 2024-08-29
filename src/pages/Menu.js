import React from 'react'
import { MenuList } from '../helpers/MenuList';
import { MenuItem } from '../components/MenuItem';
import "../style/Menu.css";

export const Menu = () => {
  return (
    <div className='menu'>
      <div className="menuTitle">Our Menu</div>
        <div className="menuList">
          {MenuList.map((menuItem,Key)=>{
           
            return <MenuItem 
            key={Key}
            image={menuItem.image}
            name={menuItem.name}
            price={menuItem.price}/>

          })}
          </div>
    </div>
  )
}

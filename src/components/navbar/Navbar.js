import React,{useState} from 'react'
import { Nav,Logo,Hamburger,MenuLink,Menu } from './NavbarStyles'
import gb from "../../assets/GB.png"

const Navbar = () => {
    const [isOpen,setIsOpen]=useState(false)
    return (
        <Nav>
            <Logo to="/">
                <i> <img src={gb} style={{width: "150px"}} alt="Logo" /></i>
            </Logo>
            <Hamburger onClick={()=>setIsOpen(!isOpen)}>
                <span/>
                <span/>
                <span/>
            </Hamburger>

            <Menu isOpen={isOpen}>
                <MenuLink to="/about">About</MenuLink>
                <MenuLink to={{pathname:"https://github.com/GulBSahin"}}>Github</MenuLink>
                <MenuLink to="/login">Login</MenuLink>
            </Menu>
        </Nav>
    )
}

export default Navbar

import React from "react";
import styled, { useTheme } from "styled-components";
import LogoImg from "/utils/Images/Logo1.png";
import {Link as linkr} from "react-router-dom";
import Button from "./button";
import { MenuRounded } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { useState } from "react";


const Nav = styled.div`
background-color: ${({theme})=>theme.navbar};
height: 80px;
display: flex;
align-items: center;
justify-content: center;
font-size: 1rem;
position: sticky;
top: 0;
z-index: 10;
color: white;`;
const NavContainer = styled.div`
width: 100%;
max-width: 1400px;
padding:0 25px;
display: flex;
justify-content: space-between;
height: 100%%
`;

const NavLogo = styled.div`
width: 100%;
display: flex;
flex: 0.5;
align-items: center;
 padding: 0 8px;
top: 0;
 overflow: "hidden"`;
const NavItems = styled.ul`
flex: 1;
z-index: 1;
width: 100%;
display: flex;
align-items: center;
justify-content: end;
gap: 5%;
padding: 5px 8px;
list-style: none;


@media screen and (max-width: 768px){
    display: none;
}`;
const Logo = styled.img`
height: 30%;
`;
const Navlink = styled(linkr)`
display: flex;
align-items: center;
color: ${({theme})=>theme.text_primary};
z-index: 10;
font-size: 1rem;
font-weight: 500;
cursor: pointer;
transition: all 0.3s slide-in;
text-decoration: none;
&:hover {
    color: ${({theme})=> theme.text_secondary};
    transform: scale(1.05);
}
`;
const MobileIcon = styled(IconButton)`
display: none;
 display: ${({ isdashboard }) => (isdashboard === 'true' ? 'none' : 'flex')};
color: ${({theme})=> theme.text_primary};
@media screen and (max-width: 768px){
    display: flex;
    align-items: center;
 }
    top: 0;
overflow: hidden;`;
const MobileMenu = styled.ul` 
display: ${({ open }) => (open ? 'flex' : 'none')};
display: ${({ isdashboard }) => (isdashboard === 'true' ? 'none' : 'flex')};
color: ${({theme})=> theme.text_primary};
overflow: hidden;
z-index: 1;
flex-direction: column;
align-items: start;
gap: 16px;
padding: 0 6px;
width: 100%;
list-style: none;
padding: 12px 40px 24px 40px;
background: ${({ theme }) => theme.bg};
position: absolute;
top:80px;
left: 0;
transition: all 0.6s ease-in-out;
border-radius: 0 0 20px 20px;
box-shadow: 0 0 10px 0 ${({ theme }) => theme.shadow};
transform: ${({ open }) => (open ? "translateY(0)" : "translateY(-100%)")};
opacity: ${({ open }) => (open ? "100%" : "0")};
z-index: ${({ open }) => (open ? "1000" : "-1000")};
`;

const Buttonlink = styled(linkr)`
text-decoration: none;
`;
const Navbar = () => {
    
    const theme=useTheme();
    const [open, setOpen] = useState(false);
    return (
        
        <Nav>
            <NavContainer >
                <MobileIcon  sx={{color:theme.text_primary, }}  onClick={()=>setOpen(!open)} >
                    <MenuRounded sx={{color: "inherit",display: { xs: 'flex', md: 'none' }}}></MenuRounded>

                </MobileIcon>
                <NavLogo>
                    <Logo src={LogoImg}></Logo>
                </NavLogo>
                <MobileMenu open={open}>
                    <Navlink to="/" onClick={()=>setOpen(!open)}>Home </Navlink>
                    <Navlink to="/about" onClick={()=>setOpen(!open)}>About Us</Navlink>   
                    <Navlink to="/contact" onClick={()=>setOpen(!open)}>Contact Us</Navlink>
                    <Buttonlink to="/signup" onClick={()=>setOpen(!open)}>
                    <Button text="Signup/Signin" onClick={()=>setOpen(!open)}/>
                    </Buttonlink>

                </MobileMenu>
                <NavItems sx={{display: { xs: 'flex', md: 'none' }}}>
                    <Navlink to="/">Home</Navlink>
                    <Navlink to="/about">About Us</Navlink>   
                    <Navlink to="/contact">Contact Us</Navlink>
                    <Buttonlink sx={{overflow: "hidden"}} to="/signup">
                    <Button text="Signup" small />
                    </Buttonlink>

                </NavItems>
            </NavContainer>
        </Nav>
        
    )
}
export default Navbar;
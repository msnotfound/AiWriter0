import React from "react";
import styled, { useTheme } from "styled-components";
import LogoImg from "../assets/Logo.png";




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

const Logo = styled.img`
height: 30%;
`;


const Navbar = () => {
    const theme = useTheme();
    
    return (
        
        <Nav>
            <NavContainer >
                
                <NavLogo>
                    <Logo src={LogoImg}></Logo>
                </NavLogo>
                

               
            </NavContainer>
        </Nav>
        
    )
}
export default Navbar;
import React, { useState } from 'react';
import styled, { useTheme } from "styled-components";
import api from '/utils/api/axios';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../contexts/UserContext';
import { useContext } from 'react';
// import Button from "../components/button";
import {Link as linkr} from "react-router-dom";

const SignupContainer = styled.div`
  align-items: center;
  justify-content: center;
  padding: 20px;
  text-align: center;
`;

const SignupHeading = styled.h2`
  // Your custom styles here
  font-size: 24px;
  margin-bottom: 10px;
  color: ${({theme})=>theme.menu_primary_text}
`;

const SignupForm = styled.form`
 align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
`;

const FormInput = styled.input`
 width: 50%;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const FormButton = styled.button`
  // Your custom styles here
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;
const Nav = styled.div`
background-color: ${({theme})=>theme.navbar};
height: 100px;
display: flex;
flex-direction: column;


top: 0;

color: white;`;
const NavContainer = styled.div`
width: 100%;
max-width: 1400px;
padding:0 25px;
display: flex;

height: 100%%
`;
const Buttonlink = styled(linkr)`
text-decoration: none;
`;

const Login = () => {
  const theme = useTheme(); // Access theme from ThemeContext
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const { setUser } = useContext(UserContext); // Access setUser from UserContext
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = formData;
    // Handle form submission here, e.g., send data to a server
    try {
    const response = await api.post('/login', { email, password });
    if (response.status === 201) {
      setUser(response.data); // Update the user context
      navigate('/dashboard/ai-writer'); // Redirect to the dashboard page
    }else {
      // Handle unsuccessful login (potentially unauthenticated response)
      throw new Error('Invalid credentials or server error');
    }
  } catch (error) {
    // Generic error handling (improve if possible)
    console.error('Error during login:', error);
    alert('An error occurred while logging in. Please check your credentials and try again.');
  } finally {
    // Optional: Reset any loading state or perform cleanup
  }
};

  return (
    <SignupContainer><Nav style={{height:'150px'}}><NavContainer></NavContainer>
        </Nav>
      <SignupHeading>Login</SignupHeading>
      <SignupForm onSubmit={handleSubmit}>
        
        <FormInput
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
        />
        <FormInput
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
        />
        <FormButton type="submit">Login</FormButton>
      </SignupForm>
      <Nav style={{height:'50px'}}/>
      <Buttonlink  to="/signup">
      <FormButton >Sign Up</FormButton>
      </Buttonlink>
     
      
    </SignupContainer>
  );
};

export default Login;
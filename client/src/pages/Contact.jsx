import React from 'react';
import styled from 'styled-components';
import {Link as linkr} from 'react-router-dom';
const ContactContainer = styled.div`
 display: block;  margin-left: 20%; 
//  position: relative;
  // flex: 1;
// flex-direction: column;
padding: 20px;
overflow
  text-align: center;
align-items: center;
  width: 50%;
`;

const ContactHeading = styled.h2`

  font-size: 24px;
  margin-bottom: 10px;
`;

const ContactForm = styled.form`

  display: flex;
  flex-direction: column;
`;

const FormInput = styled.input`
 
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const FormTextarea = styled.textarea`
  
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  resize: vertical;
`;

const FormButton = styled.button`
  
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  overflow: hidden;
  border-radius: 20px;
  cursor: pointer;
  transition: transform 0.3s ease-in-out;
  &:hover {
    transform: scale(1.05);
    
  }
`;
const Buttonlink = styled(linkr)`
text-decoration: none;
`;
const Contact = () => {
  return (
    <ContactContainer>
      <ContactContainer style={{height:'100px'}}/>
      <ContactHeading style={{color:'white'}}>Contact Us</ContactHeading>
      <ContactForm>
        <FormInput type="text" placeholder="Name" />
        <FormInput type="email" placeholder="Email" />
        <FormTextarea placeholder="Message" />
        
        <FormButton  type="submit" >Send</FormButton>
      </ContactForm>
    </ContactContainer>
  );
};

export default Contact;
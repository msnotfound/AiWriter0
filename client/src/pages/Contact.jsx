import React from 'react';
import styled from 'styled-components';

const ContactContainer = styled.div`
  
  padding: 20px;
  text-align: center;
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
  border-radius: 5px;
  cursor: pointer;
`;

const Contact = () => {
  return (
    <ContactContainer>
      <ContactHeading>Contact Us</ContactHeading>
      <ContactForm>
        <FormInput type="text" placeholder="Name" />
        <FormInput type="email" placeholder="Email" />
        <FormTextarea placeholder="Message" />
        <FormButton  type="submit">Send Message</FormButton>
      </ContactForm>
    </ContactContainer>
  );
};

export default Contact;
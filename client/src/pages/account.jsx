import React, { useContext } from 'react';
import styled from 'styled-components';
import { UserContext } from '../contexts/UserContext';
import api from '../../utils/api/axios';
const AccountContainer = styled.div`
  padding: 20px;
  text-align: center;
`;

const AccountHeading = styled.h2`
  font-size: 24px;
  margin-bottom: 10px;
  color: ${({ theme }) => theme.menu_primary_text};
`;

const AccountEmail = styled.p`
  font-size: 16px;
  color: ${({ theme }) => theme.text_primary};
`;

const Button = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin: 10px;
`;

const Account = () => {
  const { user, loading } = useContext(UserContext);
  const handleOnclick = async () => {
    try {
      await api.post('/logout');
      alert('Logged out');
      window.location.href = '/login';
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };


  if (loading) {
    return <div>Loading...</div>; // You can replace this with a loading spinner
  }

  if (!user) {
    return <div>User not found</div>; // Handle case where user is not found
  }

  return (
    <AccountContainer>
      <AccountHeading>Account Information</AccountHeading>
      <AccountEmail>Email: {user.email}</AccountEmail>
      <AccountEmail>Id: {user.id}</AccountEmail>
      <Button onClick={handleOnclick}>Logout</Button>
    </AccountContainer>
  );
};

export default Account;
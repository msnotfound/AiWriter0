import { useState, useContext, useEffect  } from 'react';
import styled from 'styled-components';
// import axios from 'axios';
import api from '/utils/api/axios';
import { UserContext } from '../contexts/UserContext';

const NotesContainer = styled.div`
  padding: 20px;
  text-align: center;
  
`;

const Heading = styled.h2`
  font-size: 24px;
  margin-bottom: 20px;
  color: ${({ theme }) => theme.menu_primary_text};
`;

const Input = styled.textarea`
  width: 80%;
  height: 150px;
  padding: 10px;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const Button = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const Notes = () => {
  const [note, setNote] = useState('');
  const { user } = useContext(UserContext);
  useEffect(() => {
    const fetchNote = async () => {
      try {
        const response = await api.get('/get-note');
        setNote(response.data.notes); // Assuming the response has the note
      } catch (error) {
        console.error('Error fetching note:', error);
      }
    };

    fetchNote();
  }, [user]);

  const handleSave = async () => {
    try {
      await api.post('/save-note', { notes: note }, {withCredentials: true});
      alert('Note saved successfully');
    } catch (error) {
      console.error('Error saving note:', error);
    }
  };

  return (
    <NotesContainer>
      <Heading>Notes</Heading>
      <Input
        type="text"
        placeholder="Enter a note"
        value={note}
        onChange={(e) => setNote(e.target.value)}
        onBlur={() => document.activeElement.blur()} // Remove focus from input field
      />
      <Button onClick={handleSave}>Save</Button>
    </NotesContainer>
  );
};

export default Notes;
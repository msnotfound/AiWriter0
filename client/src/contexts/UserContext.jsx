import { createContext, useState, useEffect } from 'react';
import api from '../../utils/api/axios';
import PropTypes from 'prop-types';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null); // Default state as null
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await api.get('/account');
        setUser(response.data);
      } catch (error) {
        console.error('Error fetching user:', error);
        if (error.response?.status === 401) {
          setUser(null); // Handle unauthenticated state
        }
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser, loading }}>
      {children}
    </UserContext.Provider>
  );
};

UserProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

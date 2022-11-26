import PropTypes from 'prop-types';
import { getUserData } from 'services/user';
import React, { createContext, useContext, useState, useEffect } from 'react';

const userContext = createContext();

export const useUser = () => {
    return useContext(userContext);
};

export const useUserProvider = () => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getUser = async () => {
            try {
                const response = await getUserData();
                setUser(response.data);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        };
        getUser();
    }, []);

    return {
        user: user,
        loading,
        error,
    };
};

export const UserProvider = ({ children }) => {
    const { user, loading, error } = useUserProvider();

    return (
        <userContext.Provider value={{ user, loading, error }}>
            {children}
        </userContext.Provider>
    );
};

UserProvider.propTypes = {
    children: PropTypes.element,
};

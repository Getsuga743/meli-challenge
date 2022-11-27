import { useState, useEffect } from 'react';
import { getUserRestrictions } from 'services/user';

export const useGetUserRestrictions = (user) => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [restrictions, setUserRestrictions] = useState(null);

    useEffect(() => {
        if (user) {
            const fetchUser = async () => {
                try {
                    const response = await getUserRestrictions(user);
                    setUserRestrictions(response);
                    setLoading(false);
                } catch (error) {
                    setError(error);
                }
            };
            fetchUser();
        }
    }, [user]);

    return { loading, error, restrictions, setUserRestrictions };
};

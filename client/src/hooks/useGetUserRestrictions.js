import { useState, useEffect } from 'react';
import { getUserRestrictions } from 'services/user';

export const useGetUserRestrictions = (userId) => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [restrictions, setUserRestrictions] = useState(null);
    useEffect(() => {
        if (userId) {
            const fetchUser = async () => {
                try {
                    const response = await getUserRestrictions(userId);
                    setUserRestrictions(response);
                    setLoading(false);
                } catch (error) {
                    setError(true);
                }
            };
            fetchUser();
        }
    }, [userId]);

    return { loading, error, restrictions, setUserRestrictions };
};

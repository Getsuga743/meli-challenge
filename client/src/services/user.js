import api from 'utils/config';

export const getUserData = async () => {
    const { data } = await api.get(`/users/me`);
    return data;
};

export const getUserRestrictions = async (user) => {
    const { data } = await api.get(`/users/${user.user_id}/restrictions`);
    return data;
};

export const getUserLevel = async (user) => {
    const { level } = user;

    const { data } = await api.get(`/levels/${level}`);
    return data;
};

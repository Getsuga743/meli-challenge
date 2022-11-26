import api from 'utils/config';

export const getUserData = async () => {
    const { data } = await api.get(`/users/me`);
    return data;
};

export const getUserRestrictions = async (id) => {
    const {data} = await api.get(`/users/${id}/restrictions`);
    return data;
};

export const getUserLevels = async (levelId) => {
    const {data} = await api.get(`/levels/${levelId}`);
    return data;
};

export const getDetailsOfUser = async ({ id, levelId }) => {
    const [userRestrictions, userLevels] = await Promise.all([
        getUserRestrictions(id),
        getUserLevels(levelId),
    ]);
    const responses = await Promise.all([
        userRestrictions.json(),
        userLevels.json(),
    ]);
    return {
        userRestrictions: responses[0],
        userLevels: responses[1],
    };
};

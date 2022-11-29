import api from 'utils/config';

export const getUserData = async () => {
    const { data } = await api.get(`/users/me`);
    return data;
};

export const getUserRestrictions = async (userId) => {
    const { data } = await api.get(`/users/${userId}/restrictions`);
    return data;
};

export const getUserPurchases = async (userId, offset = 0, limit = 10) => {
    const { data } = await api.get(
        `/users/${userId}/purchases/?offset=${offset}&limit=${limit}`
    );
    return data;
};

export const getPurchaseDetail = async (userId, offset) => {
    const { data } = await api.get(`/users/${userId}/purchases/${offset}`);
    return data;
};

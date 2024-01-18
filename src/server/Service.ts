import axios, { AxiosError } from 'axios';

export const getData = async (baseUrl: string) => {
    try {
        const response = await axios.get(baseUrl);
        return response.data;
    } catch (error) {
        console.error(`GET Request to ${baseUrl} failed:`, error);
        throw error;
    }
}

export const getAccounts = async (page: number, limit: number) => {
    try {
        const response = await axios.get("http://localhost:3004/accounts", {
            params: {
                _page: page,
                _limit: limit
            }
        });
        return response.data;
    } catch (error) {
        const axiosError = error as AxiosError;
        throw new Error(`Error fetching accounts: ${axiosError.message}`);
    }
};

export const getProfilesById = async (id: string | undefined, page: number, limit: number) => {
    if (id) {
        console.log('Fetching profiles for id:', id);
        try {
            const response = await axios.get(`http://localhost:3004/profiles`, {
                params: {
                    accountId: id,
                    _page: page,
                    _limit: limit,
                },
            });
            return response.data;
        } catch (error) {
            const axiosError = error as AxiosError;
            throw new Error(`Error fetching profiles: ${axiosError.message}`);
        }
    } else {
        console.error('Invalid id');
        throw new Error('Invalid id');
    }
};

export const getCampaignById = async (id: string | undefined, page: number, limit: number) => {
    if (id) {
        console.log('Fetching campaigns for id:', id);
        try {
            const response = await axios.get(`http://localhost:3004/campaigns`, {
                params: {
                    profileId: id,
                    _page: page,
                    _limit: limit,
                },
            });
            return response.data;
        } catch (error) {
            const axiosError = error as AxiosError;
            throw new Error(`Error fetching campaigns: ${axiosError.message}`);
        }
    } else {
        console.error('Invalid id');
        throw new Error('Invalid id');
    }
};

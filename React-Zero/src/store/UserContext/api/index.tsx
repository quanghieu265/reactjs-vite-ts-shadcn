import { apiGET } from 'config/axios';

export const getUserInfoEffect = async () => {
  try {
    const data = await apiGET({
      url: '/activity',
    });
    return data;
  } catch (error) {
    console.log('error :>> ', error);
  }
};

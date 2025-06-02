import axios, { AxiosRequestConfig } from 'axios';
import { HttpMethod } from '@/ts/enum/http';

interface ArgumentInterceptor {
  isHandleCommonRes?: boolean; // Optional
  callbackFunc?: () => {};
}

interface AxiosRequestArgument extends Pick<AxiosRequestConfig, 'url' | 'data' | 'params'>, ArgumentInterceptor {}

// Handle interceptor in axios
const createAxiosInstance = (config: ArgumentInterceptor) => {
  // Set up baseURL and timeout
  const baseURL = import.meta.env.VITE_API_BASE_URL;
  const timeout = Number(import.meta.env.VITE_API_TIMEOUT);

  const instance = axios.create({
    baseURL,
    timeout,
  });

  instance.interceptors.request.use(
    async (config) => {
      const token = localStorage.getItem('token');
      if (token) {
        config.headers.Authorization = `${import.meta.env.VITE_PREFIX_TOKEN_KEY} ${token}`;
      }
      return config;
    },
    async (error) => {
      return Promise.reject(error);
    }
  );

  instance.interceptors.response.use(
    async (response) => {
      return response?.data;
    },
    async (error) => {
      const originalRequest = error.config;

      if (error?.response?.code === 401) {
        try {
          const accessToken = await refreshToken();
          originalRequest.headers.Authorization = `${import.meta.env.VITE_PREFIX_TOKEN_KEY} ${accessToken}`;
          return await instance(originalRequest);
        } catch (error) {
          console.error(error);
          window.location.href = 'auth/login';
        }
      }

      return Promise.reject(error);
    }
  );

  return instance;
};

/**
 * Function execAPI
 * @param method GET | POST | PUT | DELETE
 * @returns
 */
const execAPI = (method: HttpMethod) => {
  return ({ isHandleCommonRes = false, ...config }: AxiosRequestArgument) => {
    const axiosInstance = createAxiosInstance({
      isHandleCommonRes,
    });

    return axiosInstance({
      method,
      ...config,
    });
  };
};

export const apiGET = execAPI(HttpMethod.GET);
export const apiPOST = execAPI(HttpMethod.POST);
export const apiPUT = execAPI(HttpMethod.PUT);
export const apiDELETE = execAPI(HttpMethod.DELETE);

// Demo function refresh token
const refreshToken = async () => {
  return {
    data: {
      token: 'aaa',
    },
  };
};

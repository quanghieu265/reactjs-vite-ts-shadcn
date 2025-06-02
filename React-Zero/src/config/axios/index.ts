import axios, { AxiosRequestConfig } from 'axios';
import { HttpMethod } from 'ts/enum/http';
import { EnumPathRouters } from 'ts/enum/menu';

interface ArgumentInterceptor {
  isHandleCommonRes?: boolean; // Optional
  callbackFunc?: () => {};
}

interface AxiosRequestArgument extends Pick<AxiosRequestConfig, 'url' | 'data' | 'params'>, ArgumentInterceptor {}

// Handle interceptor in axios
const createAxiosInstance = (config: ArgumentInterceptor) => {
  // Set up baseURL and timeout
  const baseURL = process.env.REACT_APP_API_BASE_URL;
  const timeout = Number(process.env.REACT_APP_API_TIMEOUT);

  const instance = axios.create({
    baseURL,
    timeout,
  });

  instance.interceptors.request.use(
    async (config) => {
      const token = localStorage.getItem('token');
      if (token) {
        config.headers.Authorization = `${process.env.REACT_APP_PREFIX_TOKEN_KEY} ${token}`;
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
          originalRequest.headers.Authorization = `${process.env.REACT_APP_PREFIX_TOKEN_KEY} ${accessToken}`;
          return await instance(originalRequest);
        } catch (error) {
          console.error(error);
          window.location.href = EnumPathRouters.login;
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

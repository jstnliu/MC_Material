import axios from 'axios';
import { getToken } from './users-service';

export default async function axiosRequest(url, method = 'GET', payload = null) {
  try {
    const config = {
      method,
      url,
      headers: {
        'Content-Type': 'application/json',
      },
      data: payload,
    };

    const token = getToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    const response = await axios(config);

    // Axios automatically throws an error for non-2xx responses, so no need to check response.ok
    return response.data;
  } catch (error) {
    // Handle errors, e.g., log them or throw a more specific error
    throw new Error('Request failed');
  }
}
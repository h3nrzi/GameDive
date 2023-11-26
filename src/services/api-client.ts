import axios, { AxiosRequestConfig } from 'axios';

export interface FetchResponse<T> {
	count: number;
	next: string | null;
	results: T[];
}

const axiosInstance = axios.create({
	baseURL: 'https://api.rawg.io/api',
	params: {
		key: '1d1980b5967543b8852adecb2c77e47d'
	}
});

class APIClient<T> {
	endPoint: string;
	constructor(endpoint: string) {
		this.endPoint = endpoint;
	}

	getAll = (config?: AxiosRequestConfig) =>
		axiosInstance.get<FetchResponse<T>>(this.endPoint, config).then((res) => res.data);

	get = (id: string | number) => axiosInstance.get<T>(this.endPoint + '/' + id).then((res) => res.data);
}

export default APIClient;

import { useQuery } from '@tanstack/react-query';
import { Screenshots } from '../entities/Screenshots';
import APIClient from '../services/api-client';

const useScreenshots = (gameId: number) => {
	const apiClient = new APIClient<Screenshots>('/games/' + gameId + '/screenshots');

	return useQuery({
		queryKey: ['screenshots'],
		queryFn: () => apiClient.getAll()
	});
};

export default useScreenshots;

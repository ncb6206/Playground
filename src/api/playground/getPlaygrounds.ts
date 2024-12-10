import { PlaygroundData } from '@/types/playground';
import { axiosInstance } from '@/api/axiosInstance';
import { END_POINTS } from '@/constants/api';

export const getPlaygrounds = async (playgroundId: string) => {
  const { data } = await axiosInstance.get<PlaygroundData[]>(END_POINTS.PLAYGROUNDS(playgroundId));

  return data;
};
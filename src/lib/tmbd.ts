const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = process.env.TMDB_API_KEY;

if (!API_KEY) throw new Error('TMDb API key is missing');

export interface TVShow {
  id: number;
  name: string;
  overview: string;
  poster_path: string;
  first_air_date: string;
  genres: { id: number; name: string }[];
}

export async function fetchTrendingShows() {
  const res = await fetch(`${BASE_URL}/trending/tv/week?api_key=${API_KEY}`);
  if (!res.ok) throw new Error("Failed to fetch shows");
  return res.json();
}

export async function getTVShow(id: string): Promise<TVShow> {
  const res = await fetch(`${BASE_URL}/tv/${id}?api_key=${API_KEY}&language=en-US`);
  if (!res.ok) throw new Error(`Failed to fetch TV show: ${res.statusText}`);
  return res.json();
}

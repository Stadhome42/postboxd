import { fetchTrendingShows } from "@/lib/tmbd";

export default async function Home() {
  const data = await fetchTrendingShows();
  const shows = data.results;

  return (
    <main className="main-container">
      <h1 className="title">Trending TV Shows</h1>

      <div className="show-grid">
        {shows.map((show: any) => (
          <div key={show.id} className="show-card">
            <img
              src={`https://image.tmdb.org/t/p/w500${show.poster_path}`}
              alt={show.name}
            />
            <h2 className="show-name">{show.name}</h2>
          </div>
        ))}
      </div>
    </main>
  );
}

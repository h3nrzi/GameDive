import useGenre from '../hooks/useGenre';

const GenreList = () => {
	const { data: genres, error, isLoading } = useGenre();
	return (
		<ul>
			{genres.map((g) => (
				<li key={g.id}>{g.name}</li>
			))}
		</ul>
	);
};

export default GenreList;

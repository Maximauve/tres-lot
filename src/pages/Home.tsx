import Navbar from 'src/components/navbar/Navbar';
import 'src/styles/Home.scss';

function Home(): JSX.Element {
	return (
		<div className="Home">
			<Navbar />
			<h1>Coucou</h1>
		</div>
	);
}

export default Home;

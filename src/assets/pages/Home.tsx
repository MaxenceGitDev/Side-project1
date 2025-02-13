import { Link } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import { data } from "../pages/data";

import "../styles/Home.css";

export default function Home() {
	interface DataTypes {
		id: number;
		marque: string;
		modele: string;
		img: string;
	}

	const [watches, setWatches] = useState([] as DataTypes[]);
	const [choices, setChoices] = useState([] as number[]);

	useEffect(() => {
		selectRandomWatches();
	}, [choices]);

	const selectRandomWatches = () => {
		const availableWatches = data.filter(
			(watch) => !choices.includes(watch.id),
		);
		const selectedWatches = [];

		if (availableWatches.length < 2) {
			setWatches([]);
			return;
		}

		while (selectedWatches.length < 2) {
			const randomIndex = Math.floor(Math.random() * availableWatches.length);
			const selectedWatch = availableWatches[randomIndex];

			selectedWatches.push(selectedWatch);

			availableWatches.splice(randomIndex, 1);
		}
		setWatches(selectedWatches);
	};

	const handleChoice = (id: number) => {
		setChoices([...choices, id]);
	};

	return (
		<>
			<header>
				<h1>Watchoice</h1>
				<h2>Make your choices</h2>
			</header>

			<section>
				{watches.map((watch, index) => (
					<article className={index === 0 ? "left" : "right"} key={watch.id}>
						<img src={watch.img} alt={watch.modele} />
						<h3>
							{watch.marque}, {watch.modele}
						</h3>
						<button type="button" onClick={() => handleChoice(watch.id)}>
							Choose
						</button>
					</article>
				))}
			</section>

			<Link to="/collections" state={{ choices }}>
				<button type="button" className="button-collection">
					Voir ma collection
				</button>
			</Link>
		</>
	);
}

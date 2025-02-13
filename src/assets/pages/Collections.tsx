import { data } from "./data";
import { useLocation } from "react-router-dom";

import "../styles/Collections.css";

export default function Collections() {
	const location = useLocation();
	const { choices } = location.state || { choices: [] };
	const selectedWatches = data.filter((watch) => choices.includes(watch.id));
	return (
		<>
			<h1>Collections</h1>
			<div className="collection-container">
				{selectedWatches.map((watch) => (
					<div className="collection-card" key={watch.id}>
						<img src={watch.img} alt={watch.modele} />
						<h3>{watch.marque}</h3>
						<p>{watch.modele}</p>
					</div>
				))}
			</div>
		</>
	);
}

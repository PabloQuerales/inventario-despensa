import { useState, useEffect } from "react";
import Card from "../components/Cards";
import "./Container.css";
import Dropdown from "../components/Dropdown";
import Modal from "../components/Modal";

export default function Container() {
	const [listOfItem, setListOfItem] = useState([1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3]);
	const [art, setArt] = useState("");

	return (
		<div className="container mt-3">
			<Dropdown />
			<div className="row justify-content-center">
				{listOfItem.length > 0
					? listOfItem.map(() => {
							return <Card art={art} />;
					  })
					: "Hola Mundo"}
			</div>
			<Modal setListOfItem={setListOfItem} listOfItem={listOfItem} setArt={setArt} />
		</div>
	);
}

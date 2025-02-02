import { useState, useEffect } from "react";
import Card from "../components/Cards";
import "./Container.css";
import Dropdown from "../components/Dropdown";
import Modal from "../components/Modal";

export default function Container() {
	const [listOfItem, setListOfItem] = useState([1, 2, 3, 4, 5]);
	const [showModal, setShowModal] = useState(false);

	return (
		<div className="container mt-3">
			<Dropdown />
			{listOfItem.length > 0
				? listOfItem.map(() => {
						return <Card key={listOfItem.length} />;
				  })
				: "Hola Mundo"}
			<Modal setListOfItem={setListOfItem} listOfItem={listOfItem} />
		</div>
	);
}

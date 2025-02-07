import { useState, useEffect } from "react";
import Card from "../components/Cards";
import "./Container.css";
import Dropdown from "../components/Dropdown";
import Modal from "../components/Modal";

export default function Container() {
	const [list, setList] = useState([]);

	return (
		<div className="container mt-3">
			<Dropdown />
			<div className="row justify-content-center">
				{list.length > 0
					? list.map((element) => {
							return <Card articulo={element.articulo} cant={element.cant} setList={setList} type={element.type} />;
					  })
					: "Hola Mundo"}
			</div>
			<Modal setList={setList} list={list} />
		</div>
	);
}

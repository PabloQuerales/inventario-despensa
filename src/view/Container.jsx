import { useState } from "react";
import Card from "../components/Cards";
import "./Container.css";
import Dropdown from "../components/Dropdown";
import Modal from "../components/Modal";

export default function Container() {
	const [list, setList] = useState([]);
	const [randomId] = useState(Math.floor(Math.random() * 9999));

	return (
		<div className="container d-flex flex-column justify-content-center">
			<Dropdown />
			<div className="row justify-content-center">
				{list.length > 0 ? (
					list.map((element) => {
						return <Card articulo={element.articulo} cant={element.cant} setList={setList} type={element.type} key={randomId} />;
					})
				) : (
					<div className="d-flex emty text-center flex-column justify-content-center">
						<h1>INVENTARIO VACIO</h1>
						<h3>intenta agregar algo</h3>
					</div>
				)}
			</div>
			<Modal setList={setList} list={list} />
		</div>
	);
}

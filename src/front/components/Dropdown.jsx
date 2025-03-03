import "./Dropdown.css";

export default function Dropdown() {
	return (
		<div className="dropdown">
			<button className="btn btn-secondary dropdown-toggle btn-modal" type="button" data-bs-toggle="dropdown" aria-expanded="false">
				<i className="bi bi-funnel "></i>
			</button>
			<ul className="dropdown-menu">
				<li>
					<a className="dropdown-item" href="#">
						Agregar
					</a>
				</li>
				<li>
					<a className="dropdown-item" href="#">
						Eliminar
					</a>
				</li>
				<li>
					<a className="dropdown-item" href="#">
						Editar
					</a>
				</li>
				<li>
					<a className="dropdown-item" href="#">
						Filtrar
					</a>
				</li>
			</ul>
		</div>
	);
}

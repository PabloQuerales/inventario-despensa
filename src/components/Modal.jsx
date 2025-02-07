import { useState } from "react";

export default function Modal(props) {
	const [inputValue, setInputValue] = useState({
		articulo: "",
		cant: 0,
		type: ""
	});

	const addItem = () => {
		props.setList([...props.list, inputValue]);
		setInputValue({
			articulo: "",
			cant: 0,
			type: ""
		});
	};
	const handleChange = (e) => {
		const { name, value } = e.target;
		setInputValue({ ...inputValue, [name]: value });
	};

	return (
		<>
			<button type="button" className="add-item btn btn-secondary" data-bs-toggle="modal" data-bs-target="#exampleModal">
				<i className="bi bi-plus-lg"></i>
			</button>

			<div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
				<div className="modal-dialog">
					<div className="modal-content">
						<div className="modal-header">
							<h1 className="modal-title fs-5" id="exampleModalLabel">
								Agregar un artículo al almacen
							</h1>
							<button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
						</div>
						<div className="modal-body d-flex gap-5">
							<input
								type="text"
								className="form-control"
								placeholder="Artículo"
								value={inputValue.articulo}
								aria-label="Artículo"
								name="articulo"
								onChange={handleChange}
							/>
							<input
								type="text"
								className="form-control w-25"
								placeholder="Cant."
								value={inputValue.cant}
								aria-label="Cant."
								name="cant"
								onChange={handleChange}
							/>
						</div>
						<div className="px-5 pb-3">
							<select className="form-select mr-5 " aria-label="Default select example" name="type" value={inputValue.type} onChange={handleChange}>
								<option value="">Escoge una categoría</option>
								<option value="Despensa">Despensa</option>
								<option value="Aseo">Aseo</option>
								<option value="Higiene">Higiene</option>
								<option value="Ocio">Ocio</option>
							</select>
						</div>
						<div className="modal-footer">
							<button type="button" className="btn btn-danger" data-bs-dismiss="modal">
								Cancelar
							</button>
							<button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={addItem}>
								Agregar
							</button>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

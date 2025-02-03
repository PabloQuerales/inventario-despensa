export default function Modal(props) {
	const addItem = () => {
		props.setListOfItem([...props.listOfItem, "hola"]);
		console.log(props.listOfItem.length);
	};
	const handleChange = (e) => {
		props.setArt(e.target.value);
		console.log(e.target);
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
							<input type="text" className="form-control" placeholder="Artículo" aria-label="Artículo" onChange={handleChange} />
							<input type="text" className="form-control w-25" placeholder="Cant." aria-label="Cant." onChange={handleChange} />
						</div>
						<div className="px-5 pb-3">
							<select className="form-select mr-5 " aria-label="Default select example" onChange={handleChange}>
								<option selected>Escoge una categoría</option>
								<option value="1">Despensa</option>
								<option value="2">Aseo</option>
								<option value="3">Higiene</option>
								<option value="4">Ocio</option>
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

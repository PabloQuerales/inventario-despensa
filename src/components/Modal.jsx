export default function Modal(props) {
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
							<input type="text" className="form-control" placeholder="Artículo" aria-label="Artículo" />
							<input type="text" className="form-control w-25" placeholder="Cant." aria-label="Cant." />
						</div>
						<div className="modal-footer">
							<button type="button" className="btn btn-danger" data-bs-dismiss="modal">
								Cancelar
							</button>
							<button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={props.addItem}>
								Agregar
							</button>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

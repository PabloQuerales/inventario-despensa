import { useState } from "react";
export default function Card() {
	const [count, setCount] = useState(0);
	const sum = () => {
		setCount(count + 1);
	};
	const rest = () => {
		setCount(count - 1);
	};
	return (
		<div className="card text-center mb-3" style={{ width: "12rem" }}>
			<div className="card-body">
				<h5 className="card-title">Atun</h5>
				<div className="d-flex justify-content-between align-items-center text-center">
					<button className="btn btn-secondary" onClick={sum}>
						+
					</button>
					<p className="m-0">{count}</p>
					<button className="btn btn-secondary" onClick={rest}>
						-
					</button>
				</div>
			</div>
		</div>
	);
}

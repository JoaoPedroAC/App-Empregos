import { Route, BrowserRouter, Routes } from "react-router-dom";

// import App from "../App";
import { Teste } from "../templates/Teste";

export default function rotas() {
	return (
		// vai hotear para que as requisições sejam feitas somente no front-end
		<BrowserRouter>
			{/* Routes é o novo Switch, responsavel por guiar as rotas sem fazer com que +1 rota seja executada ao mesmo tempo*/}
			<Routes>
				{/* definirá as rotas */}
				<Route path="/" element={<h1>ddddddddddd</h1>} />
				<Route path="/teste" element={<Teste />} />
			</Routes>
		</BrowserRouter>
	);
}

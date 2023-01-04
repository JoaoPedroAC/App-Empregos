import { Route, BrowserRouter, Routes } from "react-router-dom";

// import App from "../App";
import { Home } from "../templates/Home";
import { AreaDoCurriculo } from "../templates/Area-do-Curriculo";
import { Vagas } from "../templates/Vagas";

export default function rotas() {
	return (
		// vai hotear para que as requisições sejam feitas somente no front-end
		<BrowserRouter>
			{/* Routes é o novo Switch, responsavel por guiar as rotas sem fazer com que +1 rota seja executada ao mesmo tempo*/}
			<Routes>
				{/* definirá as rotas */}
				<Route path="/" element={<Home />} />
				{/* depois tem que substituir os 'Home's abaixo"  */}
				<Route path="/seu-curriculo" element={<AreaDoCurriculo />} />
				<Route path="/vagas" element={<Vagas />} />
			</Routes>
		</BrowserRouter>
	);
}

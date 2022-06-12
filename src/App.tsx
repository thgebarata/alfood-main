import { Routes, Route } from 'react-router-dom';
import Home from './paginas/Home';
import VitrineRestaurantes from './paginas/VitrineRestaurantes';
import AdministracaoRestaurantes from './paginas/Administracao/Restaurantes/AdministracaoRestaurantes';
import PaginaBaseAdmin from './paginas/Administracao/Restaurantes/PaginaBaseAdmin';
import AdministracaoPratos from './paginas/Administracao/Pratos/AdministracaoPratos';
import FormularioPrato from './paginas/Administracao/Pratos/FormularioPrato';
import FormRestaurante from './paginas/Administracao/Restaurantes/FormRestaurante';

function App() {

	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/restaurantes" element={<VitrineRestaurantes />} />
			<Route path='/admin' element={<PaginaBaseAdmin />}>
				<Route path="restaurantes" element={<AdministracaoRestaurantes />} />
				<Route path="restaurantes/novo" element={<FormRestaurante />} />
				<Route path="restaurantes/:id" element={<FormRestaurante />} />
				<Route path="pratos" element={<AdministracaoPratos />} />
				<Route path="pratos/novo" element={<FormularioPrato />} />
				<Route path="pratos/:id" element={<FormularioPrato />} />
			</Route>
		</Routes>
	);
}

export default App;

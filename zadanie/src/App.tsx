import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './layout/layout';

function App() {
	return (
		<Router>
			<Layout>
				<Routes>
					<Route path='/announcements' element={<>hello</>} />
					<Route path='/announcements/:id' element={<>AnnoucementEdit</>} />
				</Routes>
			</Layout>
		</Router>
	);
}

export default App;

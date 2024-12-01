import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './layout/Layout';
import Home from './views/Home/Hone';
import Announcements from './views/Annoucements/AnnoucemenentsList';
import AnnouncementEdit from './views/Annoucements/AnnoucemenentsEdit/AnnouncementEdit';

function App() {
	return (
		<Router>
			<Layout>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/announcements' element={<Announcements />} />
					<Route path='/announcements/:id' element={<AnnouncementEdit />} />
				</Routes>
			</Layout>
		</Router>
	);
}

export default App;

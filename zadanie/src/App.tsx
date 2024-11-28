import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { data as initialData } from './data';
import Layout from './layout/Layout';
import Announcements from './views/Annoucements/AnnoucemenentsList';
import AnnouncementEdit from './views/Annoucements/AnnoucemenentsEdit/AnnouncementEdit';
import { Announcement } from './types';

function App() {
	const [data, setData] = useState<Announcement[]>(initialData);

	return (
		<Router>
			<Layout>
				<Routes>
					<Route
						path='/announcements'
						element={<Announcements data={data} />}
					/>
					<Route
						path='/announcements/:id'
						element={<AnnouncementEdit data={data} setData={setData} />}
					/>
				</Routes>
			</Layout>
		</Router>
	);
}

export default App;

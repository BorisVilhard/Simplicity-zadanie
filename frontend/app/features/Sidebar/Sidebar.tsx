import { SIDEBAR_PAGES } from '@/app/types/constants';
import SidebarWrapper from './components/SidebarWrapper';

const Sidebar = () => {
	return <SidebarWrapper items={SIDEBAR_PAGES} />;
};

export default Sidebar;

import '@/assets/styles/globals.css';
import Navbar from '@/components/Navbar';

export const metadata = {
	title: 'PropertyPulse | Real Estate Rentals',
	description: 'Find your next rental property with PropertyPulse',
	keywords:
		'real estate, rentals, property, apartments, houses, condos, townhomes',
};

const MainLayout = ({ children }) => {
	return (
		<html lang='en'>
			<body>
				<Navbar />
				<main>{children}</main>
			</body>
		</html>
	);
};

export default MainLayout;

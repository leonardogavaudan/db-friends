import Layout from '../components/Layout';
import '../styles/global.css';

const App = ({ Component, pageProps }) => {
	return (
		<div className="h-screen w-screen bg-black text-white">
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</div>
	);
};

export default App;

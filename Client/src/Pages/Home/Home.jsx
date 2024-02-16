
import { Helmet } from 'react-helmet-async';
import Banner from './Banner/Banner';
import FabLab from './FabLab/FabLab';
import Partner from '../../Component/Partner/Partner';
import RecentEvent from '../../Component/RecentEvent/RecentEvent';

const Home = () => {
    return (
        <div className="min-h-screen bg-base-200">
            <Helmet>
                <title>Fab Lab DIU | Home</title>
            </Helmet>
            
            <Banner />
            <FabLab />
            <RecentEvent />
            <Partner />

        </div>
    );
};

export default Home;
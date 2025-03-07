import Header from '@/Components/Header';
import '@/SCSS/Home.scss';

const Home = () => {

    return (

        <>
        
                <Header text="NetNotes" />

                <div className='siteInfo'>

                    <p className='siteInfoContent'>
                        A site developed for providing information on networking topics, especially those relating to the Cisco CCNA and CCNP.
                    </p>

                </div>
        </>
    );

};

export default Home;

import Header from '@/Components/Header';
import '@/SCSS/PageStyles/Home.scss';

const Home = () => {
    return (
        <>
            <Header text="NetNotes" />

            <div className='siteInfo'>

                <p className='siteInfoContent'>
                    NetNotes is a personal knowledge base for IT networking topics, with a focus on Cisco technologies and certifications. It was created to help refresh and organize everything I’ve learned from previous CCNA certifications in Routing & Switching and Network Security.
                </p>

                <p className='siteInfoContent'>
                    The site includes core networking concepts, layered models, configuration tools like Wireshark and GNS3, and exam prep material for CCNA and CCNP certification paths. It’s continuously updated as I revisit foundational topics, explore new developments, and consider future recertification.
                </p>

                <p className='siteInfoContent'>
                    Use the navigation above to browse topics across switching, routing, the OSI and TCP/IP models, ACLs, device configuration, and more.
                </p>

            </div>

        </>
    );
};

export default Home;

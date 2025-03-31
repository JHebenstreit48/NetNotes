import Header from '@/Components/Header';
import '@/SCSS/Home.scss';

const Home = () => {
    return (
        <>
            <Header text="NetNotes" />
            <div className='siteInfo'>
                <p className='siteInfoContent'>
                    NetNotes is a dedicated knowledge base for networking topics, with a focus on Cisco technologies and certifications. It was created to help refresh my knowledge after earning past CCNA certifications in Routing & Switching and Network Security (210-060 and 210-260), which expired in 2022 following Cisco’s certification changes.
                </p>

                <p className='siteInfoContent'>
                    The site covers core networking concepts, layered models, tools like Wireshark and GNS3, and exam preparation material for CCNA and CCNP paths. It is continuously updated as I review foundational topics, explore new developments in the field, and prepare to potentially recertify.
                </p>

                <p className='siteInfoContent'>
                    Use the navigation above to explore topics across the OSI and TCP/IP models, ACLs, switching, device configuration, and more.
                </p>
            </div>
        </>
    );
};

export default Home;

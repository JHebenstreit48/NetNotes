import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import Notes from '@/Components/PageComponents/Notes/Notes';

const VLANOverview = () => {
    const markdownFilePath = '/CoreNetworkingTopics/Layer2Switching/VLAN/Overview';

    return (
        <>
            <Header text="VLAN Overview" />
            <Notes
                filePath={markdownFilePath}
                markdownContent="markdownContent"
            />
        </>
    );
};

export default VLANOverview;

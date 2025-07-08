import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header';
import Notes from '@/Components/PageComponents/Notes/NotesRendering/Notes';

const VTP = () => {
    const markdownFilePath = '/CoreNetworkingTopics/Layer2Switching/VLAN/VTP';

    return (
        <>
            <Header text="VLAN Trunking Protocol" />
            <Notes
                filePath={markdownFilePath}
                markdownContent="markdownContent"
            />
        </>
    );
};

export default VTP;

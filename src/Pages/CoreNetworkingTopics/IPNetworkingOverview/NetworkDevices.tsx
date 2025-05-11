import Header from "@/Components/PageComponents/Header";
import Notes from "@/Components/Notes/NotesRender";

const NetworkDevices = () => {
    const markdownFilePath = '/CoreNetworkingTopics/NetworkingOverview/NetworkDevices.md';

    return (
        <>
            <Header text="Networking Devices" />
            <Notes
                filePath={markdownFilePath}
                markdownContent="markdownContent"
            />
        </>
    );
};

export default NetworkDevices;

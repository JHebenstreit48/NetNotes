import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header';
import Notes from '@/Components/PageComponents/Notes/NotesRendering/Notes';

const StandardACLs = () => {
    const markdownFilePath = '/CoreNetworkingTopics/ACLs';

    return (
        <>
        <PageLayout>
            <Header text="Access Control Lists (ACLs)" />
            <Notes
                filePath={markdownFilePath}
                markdownContent="markdownContent"
            />
        </PageLayout>
        </>
    );
};

export default StandardACLs;

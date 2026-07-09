import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const RIPOverview = () => {
  const markdownFilePath = 'Networking/Legacy/ProtocolsAndStatuses/Basics/RIP/RIPOverview';

  return (
    <>
      <PageLayout>
        <PageTitle title="RIP Overview" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default RIPOverview;

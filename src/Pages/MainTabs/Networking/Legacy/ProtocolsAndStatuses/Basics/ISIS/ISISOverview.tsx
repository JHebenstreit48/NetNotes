import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const ISISOverview = () => {
  const markdownFilePath = 'Networking/Legacy/ProtocolsAndStatuses/Basics/ISIS/ISISOverview';

  return (
    <>
      <PageLayout>
        <PageTitle title="IS-IS Overview" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default ISISOverview;

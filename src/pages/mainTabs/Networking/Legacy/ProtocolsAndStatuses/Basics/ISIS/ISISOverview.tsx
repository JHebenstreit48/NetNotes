import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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

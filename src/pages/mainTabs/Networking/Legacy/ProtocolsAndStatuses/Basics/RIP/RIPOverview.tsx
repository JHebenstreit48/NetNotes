import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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

import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const DistanceVectorOps = () => {
  const markdownFilePath = 'Networking/Legacy/ProtocolsAndStatuses/Basics/RIP/DistanceVectorOps';

  return (
    <>
      <PageLayout>
        <PageTitle title="Distance-Vector Ops" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default DistanceVectorOps;

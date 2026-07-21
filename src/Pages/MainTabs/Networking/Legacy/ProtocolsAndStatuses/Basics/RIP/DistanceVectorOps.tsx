import PageLayout from '@/components/NavigationUI/PageLayout';
import PageTitle from '@/components/PageComponents/PageTitle';
import Notes from '@/components/PageComponents/Notes/Notes';

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

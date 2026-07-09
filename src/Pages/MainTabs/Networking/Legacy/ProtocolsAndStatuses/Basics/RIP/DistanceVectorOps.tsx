import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

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

import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const DistanceVectorOps = () => {
  const markdownFilePath = 'RouteAndSwitch/Legacy/ProtocolsAndStatuses/Basics/RIP/DistanceVectorOps';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Distance-Vector Ops" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default DistanceVectorOps;

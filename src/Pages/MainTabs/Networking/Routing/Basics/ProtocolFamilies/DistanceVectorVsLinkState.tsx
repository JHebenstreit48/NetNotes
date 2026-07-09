import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const DistanceVectorVsLinkState = () => {
  const markdownFilePath = 'Networking/Routing/Basics/ProtocolFamilies/DistanceVectorVsLinkState';

  return (
    <>
      <PageLayout>
        <PageTitle title="Distance-Vector vs Link-State" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default DistanceVectorVsLinkState;

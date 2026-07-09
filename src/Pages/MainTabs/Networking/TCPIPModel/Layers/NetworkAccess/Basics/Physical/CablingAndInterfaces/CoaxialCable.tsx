import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const CoaxialCable = () => {
  const markdownFilePath =
    'Networking/TCPIPModel/Layers/NetworkAccess/Basics/Physical/CablingAndInterfaces/CoaxialCable';

  return (
    <>
      <PageLayout>
        <PageTitle title="Network Access - Physical - Coaxial Cable" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default CoaxialCable;
import PageLayout from '@/components/NavigationUI/PageLayout';
import PageTitle from '@/components/PageComponents/PageTitle';
import Notes from '@/components/PageComponents/Notes/Notes';

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
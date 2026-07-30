import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
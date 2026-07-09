import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const AcknowledgmentSequencing = () => {
  const markdownFilePath = 'Networking/TCPIPModel/Layers/Transport/Advanced/TCPMechanisms/AcknowledgmentSequencing';

  return (
    <>
      <PageLayout>
        <PageTitle title="Acknowledgment/Sequencing" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default AcknowledgmentSequencing;

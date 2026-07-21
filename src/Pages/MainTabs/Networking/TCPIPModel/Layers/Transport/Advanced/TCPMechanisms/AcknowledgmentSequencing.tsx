import PageLayout from '@/components/NavigationUI/PageLayout';
import PageTitle from '@/components/PageComponents/PageTitle';
import Notes from '@/components/PageComponents/Notes/Notes';

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

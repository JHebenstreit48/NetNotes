import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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

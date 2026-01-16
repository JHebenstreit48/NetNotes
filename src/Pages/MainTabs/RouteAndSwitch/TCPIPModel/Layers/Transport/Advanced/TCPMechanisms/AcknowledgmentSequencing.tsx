import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const AcknowledgmentSequencing = () => {
  const markdownFilePath = 'RouteAndSwitch/TCPIPModel/Layers/Transport/Advanced/TCPMechanisms/AcknowledgmentSequencing';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Acknowledgment/Sequencing" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default AcknowledgmentSequencing;

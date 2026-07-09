import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const ProcessDemultiplexing = () => {
  const markdownFilePath = 'Networking/TCPIPModel/Layers/Transport/Advanced/Multiplexing/ProcessDemultiplexing';

  return (
    <>
      <PageLayout>
        <PageTitle title="Process Demultiplexing" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default ProcessDemultiplexing;

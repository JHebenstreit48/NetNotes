import PageLayout from '@/components/NavigationUI/PageLayout';
import PageTitle from '@/components/PageComponents/PageTitle';
import Notes from '@/components/PageComponents/Notes/Notes';

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

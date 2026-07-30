import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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

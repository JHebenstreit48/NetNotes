import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const ProcessDemultiplexing = () => {
  const markdownFilePath = 'RouteAndSwitch/TCPIPModel/Layers/Transport/Advanced/Multiplexing/ProcessDemultiplexing';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Process Demultiplexing" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default ProcessDemultiplexing;

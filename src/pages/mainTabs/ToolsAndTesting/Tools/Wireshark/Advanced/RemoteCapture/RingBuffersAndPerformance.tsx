import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const RingBuffersAndPerformance = () => {
  const markdownFilePath = 'Tools/Wireshark/Advanced/RemoteCapture/RingBuffersAndPerformance';

  return (
    <>
      <PageLayout>
        <PageTitle title="Ring Buffers & Performance" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default RingBuffersAndPerformance;

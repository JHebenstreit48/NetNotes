import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const WindowingCongestionControl = () => {
  const markdownFilePath = 'Networking/TCPIPModel/Layers/Transport/Advanced/TCPMechanisms/WindowingCongestionControl';

  return (
    <>
      <PageLayout>
        <PageTitle title="Windowing/Congestion Control" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default WindowingCongestionControl;

import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

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

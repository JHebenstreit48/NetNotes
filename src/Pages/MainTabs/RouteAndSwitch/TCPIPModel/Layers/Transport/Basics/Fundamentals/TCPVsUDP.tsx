import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const TCPVsUDP = () => {
  const markdownFilePath = 'RouteAndSwitch/TCPIPModel/Layers/Transport/Basics/Fundamentals/TCPVsUDP';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="TCP vs UDP" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default TCPVsUDP;

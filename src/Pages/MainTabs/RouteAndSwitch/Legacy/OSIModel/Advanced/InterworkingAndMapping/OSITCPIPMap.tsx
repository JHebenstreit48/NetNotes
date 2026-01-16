import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const OSITCPIPMap = () => {
  const markdownFilePath = 'RouteAndSwitch/Legacy/OSIModel/Advanced/InterworkingAndMapping/OSITCPIPMap';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="OSI↔TCP/IP Map" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default OSITCPIPMap;

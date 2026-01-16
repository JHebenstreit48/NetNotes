import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const DHCP = () => {
  const markdownFilePath = 'RouteAndSwitch/TCPIPModel/Layers/Application/Advanced/NetworkServices/DHCP';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="DHCP" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default DHCP;

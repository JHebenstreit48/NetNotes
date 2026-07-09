import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const DHCP = () => {
  const markdownFilePath = 'Networking/TCPIPModel/Layers/Internet/Basics/Fundamentals/DHCP';

  return (
    <>
      <PageLayout>
        <PageTitle title="TCP/IP Model - Internet Layer - Fundamentals - DHCP" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default DHCP;
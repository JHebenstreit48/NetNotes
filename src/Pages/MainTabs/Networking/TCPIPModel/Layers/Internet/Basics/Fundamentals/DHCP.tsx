import PageLayout from '@/components/NavigationUI/PageLayout';
import PageTitle from '@/components/PageComponents/PageTitle';
import Notes from '@/components/PageComponents/Notes/Notes';

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
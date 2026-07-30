import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const ARP = () => {
  const markdownFilePath =
    'RouteAndSwitch/TCPIPModel/Layers/NetworkAccess/Basics/DataLink/CoreConcepts/AddressResolutionProtocol';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Network Access - Data Link - ARP" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default ARP;
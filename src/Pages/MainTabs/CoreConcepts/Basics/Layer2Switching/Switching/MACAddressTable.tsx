import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header';
import Notes from '@/Components/PageComponents/Notes/Notes';

const MACAddress = () => {
  const markdownFilePath = '/CoreNetworkingTopics/Layer2Switching/Switching/MACAddressTable';

  return (
    <>
      <PageLayout>
        <Header text="MAC Addresses" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default MACAddress;

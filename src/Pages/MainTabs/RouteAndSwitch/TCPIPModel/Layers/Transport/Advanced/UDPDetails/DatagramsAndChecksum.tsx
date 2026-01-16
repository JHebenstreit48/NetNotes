import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const DatagramsAndChecksum = () => {
  const markdownFilePath = 'RouteAndSwitch/TCPIPModel/Layers/Transport/Advanced/UDPDetails/DatagramsAndChecksum';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Datagrams & Checksum" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default DatagramsAndChecksum;

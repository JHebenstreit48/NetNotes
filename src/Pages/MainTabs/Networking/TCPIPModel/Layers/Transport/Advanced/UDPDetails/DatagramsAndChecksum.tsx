import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const DatagramsAndChecksum = () => {
  const markdownFilePath = 'Networking/TCPIPModel/Layers/Transport/Advanced/UDPDetails/DatagramsAndChecksum';

  return (
    <>
      <PageLayout>
        <PageTitle title="Datagrams & Checksum" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default DatagramsAndChecksum;

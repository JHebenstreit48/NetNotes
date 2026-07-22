import PageLayout from '@/components/NavigationUI/PageLayout';
import PageTitle from '@/components/PageComponents/PageTitle';
import Notes from '@/components/PageComponents/Notes/Notes';

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

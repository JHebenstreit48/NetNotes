import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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

import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const SpeedDuplex = () => {
  const markdownFilePath = 'Networking/TCPIPModel/Layers/NetworkAccess/Advanced/Physical/NegotiationAndDuplex/SpeedDuplex';

  return (
    <>
      <PageLayout>
        <PageTitle title="Speed/Duplex" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default SpeedDuplex;

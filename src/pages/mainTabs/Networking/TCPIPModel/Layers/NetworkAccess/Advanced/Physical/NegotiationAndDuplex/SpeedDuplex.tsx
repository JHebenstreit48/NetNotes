import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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

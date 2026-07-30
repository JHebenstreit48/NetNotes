import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const BitDigitalSignals = () => {
  const markdownFilePath =
    'Networking/TCPIPModel/Layers/NetworkAccess/Basics/Physical/SignalsAndMedia/BitsAndDigitalSignals';
  return (
    <>
      <PageLayout>
        <PageTitle title="Signals & Media - Bit/Digital Signals" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default BitDigitalSignals;
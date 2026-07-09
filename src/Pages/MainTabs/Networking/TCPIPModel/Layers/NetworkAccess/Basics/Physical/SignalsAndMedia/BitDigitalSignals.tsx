import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

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
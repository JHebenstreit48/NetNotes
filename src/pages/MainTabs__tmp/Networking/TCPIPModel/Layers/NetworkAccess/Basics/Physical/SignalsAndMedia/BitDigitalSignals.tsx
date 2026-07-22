import PageLayout from '@/components/NavigationUI/PageLayout';
import PageTitle from '@/components/PageComponents/PageTitle';
import Notes from '@/components/PageComponents/Notes/Notes';

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
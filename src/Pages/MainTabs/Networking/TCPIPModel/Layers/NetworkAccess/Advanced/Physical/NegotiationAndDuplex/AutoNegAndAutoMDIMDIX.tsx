import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const AutoNegAndAutoMDIMDIX = () => {
  const markdownFilePath = 'Networking/TCPIPModel/Layers/NetworkAccess/Advanced/Physical/NegotiationAndDuplex/AutoNegAndAutoMDIMDIX';

  return (
    <>
      <PageLayout>
        <PageTitle title="Auto-Neg & Auto-MDI/MDI-X" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default AutoNegAndAutoMDIMDIX;

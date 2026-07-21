import PageLayout from '@/components/NavigationUI/PageLayout';
import PageTitle from '@/components/PageComponents/PageTitle';
import Notes from '@/components/PageComponents/Notes/Notes';

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

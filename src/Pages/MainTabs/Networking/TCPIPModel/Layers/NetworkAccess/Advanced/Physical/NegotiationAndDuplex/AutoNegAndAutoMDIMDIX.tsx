import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const AutoNegAndAutoMDIMDIX = () => {
  const markdownFilePath = 'Networking/TCPIPModel/Layers/NetworkAccess/Advanced/Physical/NegotiationAndDuplex/AutoNegAndAutoMDIMDIX';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Auto-Neg & Auto-MDI/MDI-X" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default AutoNegAndAutoMDIMDIX;

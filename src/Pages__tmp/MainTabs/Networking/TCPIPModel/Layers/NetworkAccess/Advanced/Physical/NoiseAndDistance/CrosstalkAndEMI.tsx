import PageLayout from '@/components/NavigationUI/PageLayout';
import PageTitle from '@/components/PageComponents/PageTitle';
import Notes from '@/components/PageComponents/Notes/Notes';

const CrosstalkAndEMI = () => {
  const markdownFilePath = 'Networking/TCPIPModel/Layers/NetworkAccess/Advanced/Physical/NoiseAndDistance/CrosstalkAndEMI';

  return (
    <>
      <PageLayout>
        <PageTitle title="Crosstalk & EMI" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default CrosstalkAndEMI;

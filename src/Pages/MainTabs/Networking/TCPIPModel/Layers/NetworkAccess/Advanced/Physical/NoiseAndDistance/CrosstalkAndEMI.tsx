import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

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

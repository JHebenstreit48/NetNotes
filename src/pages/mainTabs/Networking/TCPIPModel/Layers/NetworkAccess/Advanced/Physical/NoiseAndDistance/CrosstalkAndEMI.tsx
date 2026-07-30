import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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

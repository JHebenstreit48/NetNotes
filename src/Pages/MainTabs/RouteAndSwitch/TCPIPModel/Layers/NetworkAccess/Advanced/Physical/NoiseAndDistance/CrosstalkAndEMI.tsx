import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const CrosstalkAndEMI = () => {
  const markdownFilePath = 'RouteAndSwitch/TCPIPModel/Layers/NetworkAccess/Advanced/Physical/NoiseAndDistance/CrosstalkAndEMI';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Crosstalk & EMI" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default CrosstalkAndEMI;

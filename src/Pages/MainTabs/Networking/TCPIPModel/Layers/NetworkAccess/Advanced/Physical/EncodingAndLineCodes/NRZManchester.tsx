import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const NRZManchester = () => {
  const markdownFilePath = 'Networking/TCPIPModel/Layers/NetworkAccess/Advanced/Physical/EncodingAndLineCodes/NRZManchester';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="NRZ/Manchester" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default NRZManchester;

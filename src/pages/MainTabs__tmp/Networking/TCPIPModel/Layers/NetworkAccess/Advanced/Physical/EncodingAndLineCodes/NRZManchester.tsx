import PageLayout from '@/components/NavigationUI/PageLayout';
import PageTitle from '@/components/PageComponents/PageTitle';
import Notes from '@/components/PageComponents/Notes/Notes';

const NRZManchester = () => {
  const markdownFilePath = 'Networking/TCPIPModel/Layers/NetworkAccess/Advanced/Physical/EncodingAndLineCodes/NRZManchester';

  return (
    <>
      <PageLayout>
        <PageTitle title="NRZ/Manchester" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default NRZManchester;

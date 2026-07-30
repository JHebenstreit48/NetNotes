import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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

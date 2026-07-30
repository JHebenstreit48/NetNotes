import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const FCSCRC = () => {
  const markdownFilePath = 'Networking/TCPIPModel/Layers/NetworkAccess/Advanced/DataLink/ChecksAndErrors/FCSCRC';

  return (
    <>
      <PageLayout>
        <PageTitle title="FCS/CRC" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default FCSCRC;

import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

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

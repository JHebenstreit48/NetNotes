import PageLayout from '@/components/NavigationUI/PageLayout';
import PageTitle from '@/components/PageComponents/PageTitle';
import Notes from '@/components/PageComponents/Notes/Notes';

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

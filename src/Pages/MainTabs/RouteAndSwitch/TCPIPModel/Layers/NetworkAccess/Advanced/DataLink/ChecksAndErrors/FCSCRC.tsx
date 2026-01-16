import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const FCSCRC = () => {
  const markdownFilePath = 'RouteAndSwitch/TCPIPModel/Layers/NetworkAccess/Advanced/DataLink/ChecksAndErrors/FCSCRC';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="FCS/CRC" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default FCSCRC;

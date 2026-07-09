import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const OSITCPIPMap = () => {
  const markdownFilePath = 'Networking/Legacy/OSIModel/Advanced/InterworkingAndMapping/OSITCPIPMap';

  return (
    <>
      <PageLayout>
        <PageTitle title="OSI↔TCP/IP Map" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default OSITCPIPMap;

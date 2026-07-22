import PageLayout from '@/components/NavigationUI/PageLayout';
import PageTitle from '@/components/PageComponents/PageTitle';
import Notes from '@/components/PageComponents/Notes/Notes';

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

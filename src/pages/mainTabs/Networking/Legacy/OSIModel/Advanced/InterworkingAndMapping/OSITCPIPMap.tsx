import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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

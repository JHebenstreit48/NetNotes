import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/PageComponents/PageTitle';
import Notes from '@/components/PageComponents/Notes/Notes';

const IGMPAndMLD = () => {
  const markdownFilePath = 'Networking/TCPIPModel/Layers/Internet/Advanced/MulticastFundamentals/IGMPAndMLD';

  return (
    <>
      <PageLayout>
        <PageTitle title="IGMP & MLD" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default IGMPAndMLD;

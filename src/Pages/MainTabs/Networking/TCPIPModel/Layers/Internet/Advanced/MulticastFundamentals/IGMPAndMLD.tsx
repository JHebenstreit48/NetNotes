import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

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

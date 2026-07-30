import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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

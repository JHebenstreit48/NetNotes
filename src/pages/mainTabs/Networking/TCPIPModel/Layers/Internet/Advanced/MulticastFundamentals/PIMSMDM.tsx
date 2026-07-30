import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const PIMSMDM = () => {
  const markdownFilePath = 'Networking/TCPIPModel/Layers/Internet/Advanced/MulticastFundamentals/PIMSMDM';

  return (
    <>
      <PageLayout>
        <PageTitle title="PIM SM/DM (Concepts)" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default PIMSMDM;

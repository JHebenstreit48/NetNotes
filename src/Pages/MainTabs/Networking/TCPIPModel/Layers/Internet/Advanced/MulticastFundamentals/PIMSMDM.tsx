import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

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

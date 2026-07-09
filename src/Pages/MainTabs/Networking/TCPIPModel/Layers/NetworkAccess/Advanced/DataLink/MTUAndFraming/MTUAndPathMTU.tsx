import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const MTUAndPathMTU = () => {
  const markdownFilePath = 'Networking/TCPIPModel/Layers/NetworkAccess/Advanced/DataLink/MTUAndFraming/MTUAndPathMTU';

  return (
    <>
      <PageLayout>
        <PageTitle title="MTU & Path MTU" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default MTUAndPathMTU;

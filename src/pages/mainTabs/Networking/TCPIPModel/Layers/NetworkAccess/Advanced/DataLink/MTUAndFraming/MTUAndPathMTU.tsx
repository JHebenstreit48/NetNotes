import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/PageComponents/PageTitle';
import Notes from '@/components/PageComponents/Notes/Notes';

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

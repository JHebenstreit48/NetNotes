import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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

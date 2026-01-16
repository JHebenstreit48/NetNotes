import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const MTUAndPathMTU = () => {
  const markdownFilePath = 'RouteAndSwitch/TCPIPModel/Layers/NetworkAccess/Advanced/DataLink/MTUAndFraming/MTUAndPathMTU';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="MTU & Path MTU" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default MTUAndPathMTU;

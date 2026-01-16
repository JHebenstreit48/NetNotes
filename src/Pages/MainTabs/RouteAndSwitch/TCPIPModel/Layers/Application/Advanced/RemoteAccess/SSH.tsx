import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const SSH = () => {
  const markdownFilePath = 'RouteAndSwitch/TCPIPModel/Layers/Application/Advanced/RemoteAccess/SSH';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="SSH" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default SSH;

import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const GNS3RESTAPI = () => {
  const markdownFilePath = 'Tools/GNS3/Advanced/AutomationAndAPIs/GNS3RESTAPI';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="GNS3 REST API" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default GNS3RESTAPI;

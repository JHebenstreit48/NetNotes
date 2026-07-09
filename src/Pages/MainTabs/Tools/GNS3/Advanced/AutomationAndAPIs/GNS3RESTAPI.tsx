import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const GNS3RESTAPI = () => {
  const markdownFilePath = 'Tools/GNS3/Advanced/AutomationAndAPIs/GNS3RESTAPI';

  return (
    <>
      <PageLayout>
        <PageTitle title="GNS3 REST API" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default GNS3RESTAPI;

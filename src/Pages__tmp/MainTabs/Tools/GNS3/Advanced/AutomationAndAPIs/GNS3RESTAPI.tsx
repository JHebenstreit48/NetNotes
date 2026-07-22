import PageLayout from '@/components/NavigationUI/PageLayout';
import PageTitle from '@/components/PageComponents/PageTitle';
import Notes from '@/components/PageComponents/Notes/Notes';

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

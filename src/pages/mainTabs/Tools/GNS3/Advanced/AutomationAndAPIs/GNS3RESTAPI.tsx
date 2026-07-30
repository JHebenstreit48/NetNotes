import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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

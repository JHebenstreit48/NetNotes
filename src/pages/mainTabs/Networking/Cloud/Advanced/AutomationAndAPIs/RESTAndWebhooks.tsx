import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/PageComponents/PageTitle';
import Notes from '@/components/PageComponents/Notes/Notes';

const RESTAndWebhooks = () => {
  const markdownFilePath = 'Networking/Cloud/Advanced/AutomationAndAPIs/RESTAndWebhooks';

  return (
    <>
      <PageLayout>
        <PageTitle title="REST & Webhooks" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default RESTAndWebhooks;

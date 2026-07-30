import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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

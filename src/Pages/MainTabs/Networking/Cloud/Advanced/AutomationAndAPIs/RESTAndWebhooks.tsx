import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const RESTAndWebhooks = () => {
  const markdownFilePath = 'Networking/Cloud/Advanced/AutomationAndAPIs/RESTAndWebhooks';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="REST & Webhooks" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default RESTAndWebhooks;

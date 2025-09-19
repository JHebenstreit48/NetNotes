import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import Notes from '@/Components/PageComponents/Notes/Notes';

const Firewalls = () => {
  const markdownFilePath = '/CoreNetworkingTopics/NetworkSecurity/Firewalls';

  return (
    <>
      <PageLayout>
        <Header text="Firewalls" />
        <Notes
          filePath={markdownFilePath}
        />
      </PageLayout>
    </>
  );
};

export default Firewalls;

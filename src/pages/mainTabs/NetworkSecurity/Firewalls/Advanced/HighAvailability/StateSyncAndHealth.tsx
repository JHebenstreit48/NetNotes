import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/PageComponents/PageTitle';
import Notes from '@/components/PageComponents/Notes/Notes';

const StateSyncAndHealth = () => {
  const markdownFilePath = 'NetworkSecurity/Firewalls/Advanced/HighAvailability/StateSyncAndHealth';

  return (
    <>
      <PageLayout>
        <PageTitle title="State Sync & Health" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default StateSyncAndHealth;

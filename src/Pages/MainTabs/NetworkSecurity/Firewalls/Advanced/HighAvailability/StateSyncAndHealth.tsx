import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

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

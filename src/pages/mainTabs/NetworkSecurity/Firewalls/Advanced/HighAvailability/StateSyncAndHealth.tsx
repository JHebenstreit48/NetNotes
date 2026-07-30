import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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

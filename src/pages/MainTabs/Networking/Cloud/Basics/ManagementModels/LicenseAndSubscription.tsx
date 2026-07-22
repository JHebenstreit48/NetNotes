import PageLayout from '@/components/NavigationUI/PageLayout';
import PageTitle from '@/components/PageComponents/PageTitle';
import Notes from '@/components/PageComponents/Notes/Notes';

const LicenseAndSubscriptions = () => {
  const markdownFilePath =
    'Networking/Cloud/Basics/ManagementModels/LicenseAndSubscriptions';

  return (
    <>
      <PageLayout>
        <PageTitle title="Cloud - Licensing & Subscriptions" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default LicenseAndSubscriptions;
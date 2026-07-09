import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

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
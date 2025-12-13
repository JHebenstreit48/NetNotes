import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const LicenseAndSubscriptions = () => {
  const markdownFilePath =
    'RouteAndSwitch/Cloud/Basics/ManagementModels/LicenseAndSubscriptions';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Cloud - Licensing & Subscriptions" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default LicenseAndSubscriptions;
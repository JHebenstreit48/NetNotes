import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
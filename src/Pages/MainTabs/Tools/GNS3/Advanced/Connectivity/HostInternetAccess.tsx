import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const HostInternetAccess = () => {
  const markdownFilePath = 'Tools/GNS3/Advanced/Connectivity/HostInternetAccess';

  return (
    <>
      <PageLayout>
        <PageTitle title="Host/Internet Access" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default HostInternetAccess;

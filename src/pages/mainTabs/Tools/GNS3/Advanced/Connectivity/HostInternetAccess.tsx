import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/PageComponents/PageTitle';
import Notes from '@/components/PageComponents/Notes/Notes';

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

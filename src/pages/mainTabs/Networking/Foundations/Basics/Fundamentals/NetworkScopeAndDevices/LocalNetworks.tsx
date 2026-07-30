import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const LocalNetworks = () => {
  const markdownFilePath = 'Networking/Foundations/Basics/Fundamentals/NetworkScopeAndDevices/LocalNetworks';

  return (
    <>
      <PageLayout>
        <PageTitle title="Fundamentals - Local Networks and Connectivity" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default LocalNetworks;
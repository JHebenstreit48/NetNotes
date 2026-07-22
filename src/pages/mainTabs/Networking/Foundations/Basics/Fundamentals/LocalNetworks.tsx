import PageLayout from '@/components/NavigationUI/PageLayout';
import PageTitle from '@/components/PageComponents/PageTitle';
import Notes from '@/components/PageComponents/Notes/Notes';

const LocalNetworks = () => {
  const markdownFilePath = 'Networking/Foundations/Basics/Fundamentals/LocalNetworks';

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
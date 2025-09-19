import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const LocalNetworks = () => {
  const markdownFilePath = '/CoreConcepts/Basics/Fundamentals/Overview/LocalNetworks';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Local Networks and Connectivity" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default LocalNetworks;
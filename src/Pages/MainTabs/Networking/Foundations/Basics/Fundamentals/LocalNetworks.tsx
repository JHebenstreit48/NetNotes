import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const LocalNetworks = () => {
  const markdownFilePath = 'Networking/Foundations/Basics/Fundamentals/LocalNetworks';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Fundamentals - Local Networks and Connectivity" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default LocalNetworks;
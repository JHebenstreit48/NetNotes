import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTile from '@/Components/PageComponents/PageTitle'
import Notes from '@/Components/PageComponents/Notes/Notes';

const HomeNetworkArchitecture = () => {
  const markdownFilePath = 'Networking/Foundations/Basics/DevicesAndModels/HomeNetworkArchitecture';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTile title="Fundamentals - Home Network Architecture" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default HomeNetworkArchitecture;
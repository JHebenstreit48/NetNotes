import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTile from '@/Components/PageComponents/PageTitle'
import Notes from '@/Components/PageComponents/Notes/Notes';

const HomeNetworkArchitecture = () => {
  const markdownFilePath = 'Networking/Foundations/Basics/DevicesAndModels/Fundamentals/HomeNetworkArchitecture';

  return (
    <>
      <PageLayout>
        <PageTile title="Fundamentals - Home Network Architecture" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default HomeNetworkArchitecture;
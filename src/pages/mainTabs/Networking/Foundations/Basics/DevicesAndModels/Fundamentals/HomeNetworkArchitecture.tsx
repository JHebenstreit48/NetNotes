import PageLayout from '@/components/navigationUI/pageLayout';
import PageTile from '@/components/PageComponents/PageTitle'
import Notes from '@/components/PageComponents/Notes/Notes';

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
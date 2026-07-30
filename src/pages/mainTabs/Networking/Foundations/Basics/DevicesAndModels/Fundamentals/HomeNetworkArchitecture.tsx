import PageLayout from '@/components/navigationUI/pageLayout';
import PageTile from '@/components/pageComponents/pageTitle'
import Notes from '@/components/pageComponents/notes/notes';

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
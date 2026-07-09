import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const Layer2 = () => {
  const markdownFilePath =
    'Networking/Switching/Basics/Fundamentals/Layer2';

  return (
    <>
      <PageLayout>
        <PageTitle title="Switching - Layer 2 Switching" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Layer2;
import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
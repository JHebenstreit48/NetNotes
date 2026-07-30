import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const Introduction = () => {
  const markdownFilePath = 'Networking/Mobile/Basics/Tethering/Introduction';

  return (
    <>
      <PageLayout>
        <PageTitle title="Tethering: Introduction" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Introduction;

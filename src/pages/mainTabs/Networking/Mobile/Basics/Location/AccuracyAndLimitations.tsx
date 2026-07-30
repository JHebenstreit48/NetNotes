import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const AccuracyAndLimitations = () => {
  const markdownFilePath = 'Networking/Mobile/Basics/Location/AccuracyAndLimitations';

  return (
    <>
      <PageLayout>
        <PageTitle title="Accuracy & Limitations" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default AccuracyAndLimitations;

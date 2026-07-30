import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/PageComponents/PageTitle';
import Notes from '@/components/PageComponents/Notes/Notes';

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

import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

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

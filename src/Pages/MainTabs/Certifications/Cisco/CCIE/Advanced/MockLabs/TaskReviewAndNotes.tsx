import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const TaskReviewAndNotes = () => {
  const markdownFilePath = 'Certifications/Cisco/CCIE/Advanced/MockLabs/TaskReviewAndNotes';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Task Review & Notes" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default TaskReviewAndNotes;

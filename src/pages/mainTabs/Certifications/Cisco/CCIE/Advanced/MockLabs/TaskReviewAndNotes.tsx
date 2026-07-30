import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/PageComponents/PageTitle';
import Notes from '@/components/PageComponents/Notes/Notes';

const TaskReviewAndNotes = () => {
  const markdownFilePath = 'Certifications/Cisco/CCIE/Advanced/MockLabs/TaskReviewAndNotes';

  return (
    <>
      <PageLayout>
        <PageTitle title="Task Review & Notes" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default TaskReviewAndNotes;

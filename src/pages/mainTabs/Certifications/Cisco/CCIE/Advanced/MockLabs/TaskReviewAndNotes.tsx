import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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

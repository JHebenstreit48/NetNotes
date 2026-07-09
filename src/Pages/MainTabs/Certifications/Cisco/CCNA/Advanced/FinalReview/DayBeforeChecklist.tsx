import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const DayBeforeChecklist = () => {
  const markdownFilePath = 'Certifications/Cisco/CCNA/Advanced/FinalReview/DayBeforeChecklist';

  return (
    <>
      <PageLayout>
        <PageTitle title="Day-Before Checklist" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default DayBeforeChecklist;

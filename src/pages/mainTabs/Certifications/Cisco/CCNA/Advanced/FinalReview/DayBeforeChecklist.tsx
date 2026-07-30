import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/PageComponents/PageTitle';
import Notes from '@/components/PageComponents/Notes/Notes';

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

import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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

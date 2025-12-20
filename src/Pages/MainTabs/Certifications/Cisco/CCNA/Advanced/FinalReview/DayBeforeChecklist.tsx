import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const DayBeforeChecklist = () => {
  const markdownFilePath = 'Certifications/Cisco/CCNA/Advanced/FinalReview/DayBeforeChecklist';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Day-Before Checklist" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default DayBeforeChecklist;

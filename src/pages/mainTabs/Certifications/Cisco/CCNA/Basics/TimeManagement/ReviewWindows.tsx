import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const ReviewWindows = () => {
  const markdownFilePath = 'Certifications/Cisco/CCNA/Basics/TimeManagement/ReviewWindows';

  return (
    <>
      <PageLayout>
        <PageTitle title="Review Windows" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default ReviewWindows;

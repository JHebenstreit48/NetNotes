import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

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

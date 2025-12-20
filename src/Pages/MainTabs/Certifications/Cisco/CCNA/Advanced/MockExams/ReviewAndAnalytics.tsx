import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const ReviewAndAnalytics = () => {
  const markdownFilePath = 'Certifications/Cisco/CCNA/Advanced/MockExams/ReviewAndAnalytics';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Review & Analytics" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default ReviewAndAnalytics;

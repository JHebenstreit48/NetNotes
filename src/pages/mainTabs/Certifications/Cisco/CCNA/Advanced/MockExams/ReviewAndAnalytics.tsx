import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/PageComponents/PageTitle';
import Notes from '@/components/PageComponents/Notes/Notes';

const ReviewAndAnalytics = () => {
  const markdownFilePath = 'Certifications/Cisco/CCNA/Advanced/MockExams/ReviewAndAnalytics';

  return (
    <>
      <PageLayout>
        <PageTitle title="Review & Analytics" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default ReviewAndAnalytics;

import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const ReviewAndAnalytics = () => {
  const markdownFilePath = 'Certifications/Cisco/CCNP/Advanced/MockExams/ReviewAndAnalytics';

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

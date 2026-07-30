import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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

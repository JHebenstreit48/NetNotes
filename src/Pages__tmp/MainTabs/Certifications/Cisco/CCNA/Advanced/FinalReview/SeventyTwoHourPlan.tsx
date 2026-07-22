import PageLayout from '@/components/NavigationUI/PageLayout';
import PageTitle from '@/components/PageComponents/PageTitle';
import Notes from '@/components/PageComponents/Notes/Notes';

const SeventyTwoHourPlan = () => {
  const markdownFilePath = 'Certifications/Cisco/CCNA/Advanced/FinalReview/72HourPlan';

  return (
    <>
      <PageLayout>
        <PageTitle title="72-Hour Plan" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default SeventyTwoHourPlan;

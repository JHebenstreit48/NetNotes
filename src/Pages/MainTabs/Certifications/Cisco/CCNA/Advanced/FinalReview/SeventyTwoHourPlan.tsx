import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

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

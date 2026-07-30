import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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

import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const TwelveWeek = () => {
  const markdownFilePath = 'Certifications/Cisco/DevNet/Advanced/BlueprintPlans/12Week';

  return (
    <>
      <PageLayout>
        <PageTitle title="12-Week (DEVCOR)" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default TwelveWeek;

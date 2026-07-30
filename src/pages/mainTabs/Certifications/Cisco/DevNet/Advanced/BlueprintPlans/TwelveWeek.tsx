import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/PageComponents/PageTitle';
import Notes from '@/components/PageComponents/Notes/Notes';

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

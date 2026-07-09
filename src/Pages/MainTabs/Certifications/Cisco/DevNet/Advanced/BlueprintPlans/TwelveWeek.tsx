import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

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

import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const EightWeek = () => {
  const markdownFilePath = 'Certifications/Cisco/DevNet/Advanced/BlueprintPlans/8Week';

  return (
    <>
      <PageLayout>
        <PageTitle title="8-Week (Associate)" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default EightWeek;

import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/PageComponents/PageTitle';
import Notes from '@/components/PageComponents/Notes/Notes';

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

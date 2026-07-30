import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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

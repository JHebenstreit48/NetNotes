import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const ProcessingAndRuleOrder = () => {
  const markdownFilePath = 'NetworkSecurity/ACLs/Basics/Overview/ProcessingAndRuleOrder';

  return (
    <>
      <PageLayout>
        <PageTitle title="Processing & Rule Order" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default ProcessingAndRuleOrder;

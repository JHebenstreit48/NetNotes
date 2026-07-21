import PageLayout from '@/components/NavigationUI/PageLayout';
import PageTitle from '@/components/PageComponents/PageTitle';
import Notes from '@/components/PageComponents/Notes/Notes';

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

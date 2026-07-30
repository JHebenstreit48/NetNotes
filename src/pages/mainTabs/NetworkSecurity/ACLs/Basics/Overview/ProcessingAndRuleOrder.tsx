import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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

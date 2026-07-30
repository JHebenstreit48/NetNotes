import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const RuleDesignAndOrder = () => {
  const markdownFilePath = 'NetworkSecurity/Firewalls/Advanced/PolicyAndAccessControl/RuleDesignAndOrder';

  return (
    <>
      <PageLayout>
        <PageTitle title="Rule Design & Order" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default RuleDesignAndOrder;

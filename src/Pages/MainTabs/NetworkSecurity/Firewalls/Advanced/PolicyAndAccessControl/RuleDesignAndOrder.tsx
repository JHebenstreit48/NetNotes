import PageLayout from '@/components/NavigationUI/PageLayout';
import PageTitle from '@/components/PageComponents/PageTitle';
import Notes from '@/components/PageComponents/Notes/Notes';

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

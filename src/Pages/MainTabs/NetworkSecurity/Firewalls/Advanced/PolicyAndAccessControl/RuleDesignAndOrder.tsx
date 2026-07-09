import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

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

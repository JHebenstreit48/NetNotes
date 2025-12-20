import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const RuleDesignAndOrder = () => {
  const markdownFilePath = 'NetworkSecurity/Firewalls/Advanced/PolicyAndAccessControl/RuleDesignAndOrder';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Rule Design & Order" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default RuleDesignAndOrder;

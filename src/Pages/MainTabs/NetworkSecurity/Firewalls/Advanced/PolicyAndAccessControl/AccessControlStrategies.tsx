import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const AccessControlStrategies = () => {
  const markdownFilePath = 'NetworkSecurity/Firewalls/Advanced/PolicyAndAccessControl/AccessControlStrategies';

  return (
    <>
      <PageLayout>
        <PageTitle title="Access Control Strategies" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default AccessControlStrategies;

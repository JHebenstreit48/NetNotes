import PageLayout from '@/components/NavigationUI/PageLayout';
import PageTitle from '@/components/PageComponents/PageTitle';
import Notes from '@/components/PageComponents/Notes/Notes';

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

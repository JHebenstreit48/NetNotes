import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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

import PageLayout from '@/components/NavigationUI/PageLayout';
import PageTitle from '@/components/PageComponents/PageTitle';
import Notes from '@/components/PageComponents/Notes/Notes';

const EnterpriseVsSecurity = () => {
  const markdownFilePath = 'Certifications/Cisco/CCIE/Basics/Tracks/EnterpriseVsSecurity';

  return (
    <>
      <PageLayout>
        <PageTitle title="Enterprise vs Security" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default EnterpriseVsSecurity;

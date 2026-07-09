import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

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

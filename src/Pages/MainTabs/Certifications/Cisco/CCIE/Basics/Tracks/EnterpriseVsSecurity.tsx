import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const EnterpriseVsSecurity = () => {
  const markdownFilePath = 'Certifications/Cisco/CCIE/Basics/Tracks/EnterpriseVsSecurity';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Enterprise vs Security" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default EnterpriseVsSecurity;

import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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

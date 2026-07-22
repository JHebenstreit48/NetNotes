import PageLayout from '@/components/NavigationUI/PageLayout';
import PageTitle from '@/components/PageComponents/PageTitle';
import Notes from '@/components/PageComponents/Notes/Notes';

const AccountingAndCommandAuthorization = () => {
  const markdownFilePath = 'NetworkSecurity/AccessControl/Advanced/BestPractices/AccountingAndCommandAuthorization';

  return (
    <>
      <PageLayout>
        <PageTitle title="Accounting & Command Authorization" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default AccountingAndCommandAuthorization;

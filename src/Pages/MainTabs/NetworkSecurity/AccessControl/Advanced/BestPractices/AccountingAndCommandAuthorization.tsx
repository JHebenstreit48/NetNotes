import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const AccountingAndCommandAuthorization = () => {
  const markdownFilePath = 'NetworkSecurity/AccessControl/Advanced/BestPractices/AccountingAndCommandAuthorization';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Accounting & Command Authorization" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default AccountingAndCommandAuthorization;

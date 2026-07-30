import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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

import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const AuthZFlowsAndResults = () => {
  const markdownFilePath = 'NetworkSecurity/AccessControl/Advanced/ISENPS/AuthZFlowsAndResults';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="AuthZ Flows & Results" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default AuthZFlowsAndResults;

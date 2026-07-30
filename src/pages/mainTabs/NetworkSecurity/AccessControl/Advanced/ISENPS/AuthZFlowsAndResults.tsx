import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/PageComponents/PageTitle';
import Notes from '@/components/PageComponents/Notes/Notes';

const AuthZFlowsAndResults = () => {
  const markdownFilePath = 'NetworkSecurity/AccessControl/Advanced/ISENPS/AuthZFlowsAndResults';

  return (
    <>
      <PageLayout>
        <PageTitle title="AuthZ Flows & Results" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default AuthZFlowsAndResults;

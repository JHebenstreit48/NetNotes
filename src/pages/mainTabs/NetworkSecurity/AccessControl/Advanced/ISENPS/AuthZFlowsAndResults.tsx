import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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

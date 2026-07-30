import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const AuthOptions = () => {
  const markdownFilePath = 'NetworkSecurity/VPNAndTunneling/Basics/RemoteAccess/AuthOptions';

  return (
    <>
      <PageLayout>
        <PageTitle title="Auth Options (MFA, SAML)" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default AuthOptions;

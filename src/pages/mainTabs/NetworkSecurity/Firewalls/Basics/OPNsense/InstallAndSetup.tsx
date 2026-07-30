import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/PageComponents/PageTitle';
import Notes from '@/components/PageComponents/Notes/Notes';

const InstallAndSetup = () => {
  const markdownFilePath = 'NetworkSecurity/Firewalls/Basics/OPNsense/InstallAndSetup';

  return (
    <>
      <PageLayout>
        <PageTitle title="Install & Setup" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default InstallAndSetup;

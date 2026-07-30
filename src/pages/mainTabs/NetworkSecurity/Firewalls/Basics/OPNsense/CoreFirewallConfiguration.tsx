import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const CoreFirewallConfiguration = () => {
  const markdownFilePath = 'NetworkSecurity/Firewalls/Basics/OPNsense/CoreFirewallConfiguration';

  return (
    <>
      <PageLayout>
        <PageTitle title="Core Firewall Configuration" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default CoreFirewallConfiguration;

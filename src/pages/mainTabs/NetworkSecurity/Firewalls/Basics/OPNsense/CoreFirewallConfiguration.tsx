import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/PageComponents/PageTitle';
import Notes from '@/components/PageComponents/Notes/Notes';

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

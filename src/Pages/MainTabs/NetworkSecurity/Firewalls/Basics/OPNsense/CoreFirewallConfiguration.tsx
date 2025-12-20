import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const CoreFirewallConfiguration = () => {
  const markdownFilePath = 'NetworkSecurity/Firewalls/Basics/OPNsense/CoreFirewallConfiguration';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Core Firewall Configuration" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default CoreFirewallConfiguration;

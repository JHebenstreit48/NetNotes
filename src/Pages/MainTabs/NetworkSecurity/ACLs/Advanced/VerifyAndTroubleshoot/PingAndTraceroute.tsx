import PageLayout from '@/components/NavigationUI/PageLayout';
import PageTitle from '@/components/PageComponents/PageTitle';
import Notes from '@/components/PageComponents/Notes/Notes';

const PingAndTraceroute = () => {
  const markdownFilePath = 'NetworkSecurity/ACLs/Advanced/VerifyAndTroubleshoot/PingAndTraceroute';

  return (
    <>
      <PageLayout>
        <PageTitle title="ping & traceroute" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default PingAndTraceroute;

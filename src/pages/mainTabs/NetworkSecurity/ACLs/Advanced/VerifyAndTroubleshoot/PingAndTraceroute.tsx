import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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

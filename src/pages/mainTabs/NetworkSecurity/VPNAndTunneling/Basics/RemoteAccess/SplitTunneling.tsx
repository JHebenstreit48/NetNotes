import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const SplitTunneling = () => {
  const markdownFilePath = 'NetworkSecurity/VPNAndTunneling/Basics/RemoteAccess/SplitTunneling';

  return (
    <>
      <PageLayout>
        <PageTitle title="Split Tunneling" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default SplitTunneling;

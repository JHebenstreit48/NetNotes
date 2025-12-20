import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const SplitTunneling = () => {
  const markdownFilePath = 'NetworkSecurity/VPNAndTunneling/Basics/RemoteAccess/SplitTunneling';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Split Tunneling" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default SplitTunneling;

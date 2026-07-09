import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const FragmentationAndTTLTricks = () => {
  const markdownFilePath = 'NetworkSecurity/IDSAndIPS/Advanced/EvasionAndResilience/FragmentationAndTTLTricks';

  return (
    <>
      <PageLayout>
        <PageTitle title="Fragmentation & TTL Tricks" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default FragmentationAndTTLTricks;

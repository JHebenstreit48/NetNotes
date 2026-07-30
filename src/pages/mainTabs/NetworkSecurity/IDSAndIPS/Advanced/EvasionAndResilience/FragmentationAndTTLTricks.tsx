import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/PageComponents/PageTitle';
import Notes from '@/components/PageComponents/Notes/Notes';

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

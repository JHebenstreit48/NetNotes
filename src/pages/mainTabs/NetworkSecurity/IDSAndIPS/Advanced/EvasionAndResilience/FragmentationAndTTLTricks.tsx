import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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

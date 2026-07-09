import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const Protections = () => {
  const markdownFilePath = 'Networking/Switching/Advanced/STP/Protections';

  return (
    <>
      <PageLayout>
        <PageTitle title="STP - Protections (BPDU/Root/Loop Guard)" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Protections;
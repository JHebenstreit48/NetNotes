import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
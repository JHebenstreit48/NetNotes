import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const Concepts = () => {
  const markdownFilePath = 'Networking/Switching/Advanced/VLAN/Concepts/Concepts';

  return (
    <>
      <PageLayout>
        <PageTitle title="VLAN Concepts" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Concepts;
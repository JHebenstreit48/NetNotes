import PageLayout from '@/components/NavigationUI/PageLayout';
import PageTitle from '@/components/PageComponents/PageTitle';
import Notes from '@/components/PageComponents/Notes/Notes';

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
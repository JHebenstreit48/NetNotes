import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const Concepts = () => {
  const markdownFilePath = 'Networking/Switching/Advanced/VLAN/Concepts/Concepts';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="VLAN Concepts" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Concepts;
import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const OSPF = () => {
  const markdownFilePath = 'Networking/Routing/Advanced/IGPs/OSPF';

  return (
    <>
      <PageLayout>
        <PageTitle title="OSPF" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default OSPF;

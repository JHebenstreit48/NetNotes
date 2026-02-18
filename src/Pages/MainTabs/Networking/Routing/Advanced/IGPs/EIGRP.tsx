import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const EIGRP = () => {
  const markdownFilePath = 'Networking/Routing/Advanced/IGPs/EIGRP';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="EIGRP (Cisco Proprietary)" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default EIGRP;

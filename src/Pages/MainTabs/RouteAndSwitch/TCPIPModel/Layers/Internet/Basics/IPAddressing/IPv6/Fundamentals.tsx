import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const Fundamentals = () => {
  const markdownFilePath = 'RouteAndSwitch/TCPIPModel/Layers/Internet/Basics/IPAddressing/IPv6/Fundamentals';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="IPv6: Fundamentals" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Fundamentals;

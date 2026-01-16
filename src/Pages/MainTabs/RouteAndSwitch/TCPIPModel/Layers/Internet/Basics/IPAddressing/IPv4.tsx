import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const IPv4 = () => {
  const markdownFilePath = 'RouteAndSwitch/TCPIPModel/Layers/Internet/Basics/IPAddressing/IPv4';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="IPv4" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default IPv4;

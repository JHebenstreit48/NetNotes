import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const NDRASLAACDAD = () => {
  const markdownFilePath = 'RouteAndSwitch/TCPIPModel/Layers/Internet/Basics/IPAddressing/IPv6/NDRASLAACDAD';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="ND/RA • SLAAC/DAD" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default NDRASLAACDAD;

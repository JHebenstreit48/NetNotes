import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const NDRASLAACDAD = () => {
  const markdownFilePath = 'Networking/TCPIPModel/Layers/Internet/Basics/IPAddressing/IPv6/NDRASLAACDAD';

  return (
    <>
      <PageLayout>
        <PageTitle title="ND/RA • SLAAC/DAD" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default NDRASLAACDAD;

import PageLayout from '@/components/NavigationUI/PageLayout';
import PageTitle from '@/components/PageComponents/PageTitle';
import Notes from '@/components/PageComponents/Notes/Notes';

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

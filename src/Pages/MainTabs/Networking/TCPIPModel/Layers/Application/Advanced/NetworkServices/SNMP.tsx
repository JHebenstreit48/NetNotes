import PageLayout from '@/components/NavigationUI/PageLayout';
import PageTitle from '@/components/PageComponents/PageTitle';
import Notes from '@/components/PageComponents/Notes/Notes';

const SNMP = () => {
  const markdownFilePath = 'Networking/TCPIPModel/Layers/Application/Advanced/NetworkServices/SNMP';

  return (
    <>
      <PageLayout>
        <PageTitle title="SNMP" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default SNMP;

import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const SNMP = () => {
  const markdownFilePath = 'Networking/TCPIPModel/Layers/Application/Advanced/NetworkServices/SNMP';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="SNMP" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default SNMP;

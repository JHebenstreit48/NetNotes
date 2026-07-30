import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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

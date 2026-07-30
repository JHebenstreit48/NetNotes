import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/PageComponents/PageTitle';
import Notes from '@/components/PageComponents/Notes/Notes';

const MultiuserLinks = () => {
  const markdownFilePath = 'Tools/CiscoPacketTracer/Advanced/Collaboration/MultiuserLinks';

  return (
    <>
      <PageLayout>
        <PageTitle title="Multiuser Links" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default MultiuserLinks;

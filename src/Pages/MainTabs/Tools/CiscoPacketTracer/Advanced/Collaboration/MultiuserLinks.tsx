import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const MultiuserLinks = () => {
  const markdownFilePath = 'Tools/CiscoPacketTracer/Advanced/Collaboration/MultiuserLinks';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Multiuser Links" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default MultiuserLinks;

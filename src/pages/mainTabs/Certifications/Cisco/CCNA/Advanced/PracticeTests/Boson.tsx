import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/PageComponents/PageTitle';
import Notes from '@/components/PageComponents/Notes/Notes';

const Boson = () => {
  const markdownFilePath = 'Certifications/Cisco/CCNA/Advanced/PracticeTests/Boson';

  return (
    <>
      <PageLayout>
        <PageTitle title="Boson" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Boson;

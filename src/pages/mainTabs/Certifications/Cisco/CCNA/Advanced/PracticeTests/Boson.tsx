import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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

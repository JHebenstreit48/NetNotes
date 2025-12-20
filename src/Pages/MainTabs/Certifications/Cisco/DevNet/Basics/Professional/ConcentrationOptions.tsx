import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const ConcentrationOptions = () => {
  const markdownFilePath = 'Certifications/Cisco/DevNet/Basics/Professional/ConcentrationOptions';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Concentration Options" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default ConcentrationOptions;

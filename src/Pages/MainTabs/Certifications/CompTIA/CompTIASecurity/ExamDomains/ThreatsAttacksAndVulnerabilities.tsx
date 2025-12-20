import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const ThreatsAttacksAndVulnerabilities = () => {
  const markdownFilePath = 'Certifications/CompTIA/CompTIASecurity/ExamDomains/ThreatsAttacksAndVulnerabilities';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Threats, Attacks & Vulnerabilities" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default ThreatsAttacksAndVulnerabilities;

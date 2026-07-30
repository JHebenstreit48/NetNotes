import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const ThreatsAttacksAndVulnerabilities = () => {
  const markdownFilePath = 'Certifications/CompTIA/CompTIASecurity/ExamDomains/ThreatsAttacksAndVulnerabilities';

  return (
    <>
      <PageLayout>
        <PageTitle title="Threats, Attacks & Vulnerabilities" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default ThreatsAttacksAndVulnerabilities;

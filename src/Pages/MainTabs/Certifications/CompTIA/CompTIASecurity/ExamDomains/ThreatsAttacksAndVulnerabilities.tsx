import PageLayout from '@/components/NavigationUI/PageLayout';
import PageTitle from '@/components/PageComponents/PageTitle';
import Notes from '@/components/PageComponents/Notes/Notes';

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

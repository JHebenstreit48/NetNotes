import PageLayout from '@/components/NavigationUI/PageLayout';
import PageTitle from '@/components/PageComponents/PageTitle';
import Notes from '@/components/PageComponents/Notes/Notes';

const CommonPitfalls = () => {
  const markdownFilePath = 'Certifications/Cisco/CCIE/Advanced/Troubleshooting/CommonPitfalls';

  return (
    <>
      <PageLayout>
        <PageTitle title="Common Pitfalls" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default CommonPitfalls;

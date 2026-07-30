import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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

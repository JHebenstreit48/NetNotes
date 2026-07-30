import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const SkillsMeasured = () => {
  const markdownFilePath = 'Certifications/DevOps/Jenkins/Overview/SkillsMeasured';

  return (
    <>
      <PageLayout>
        <PageTitle title="Skills Measured" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default SkillsMeasured;

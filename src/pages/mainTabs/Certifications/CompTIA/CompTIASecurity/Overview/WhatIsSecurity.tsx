import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const WhatIsSecurity = () => {
  const markdownFilePath = 'Certifications/CompTIA/CompTIASecurity/Overview/WhatIsSecurity';

  return (
    <>
      <PageLayout>
        <PageTitle title="What is Security+?" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default WhatIsSecurity;

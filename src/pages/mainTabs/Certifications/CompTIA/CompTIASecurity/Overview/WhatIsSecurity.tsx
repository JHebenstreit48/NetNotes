import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/PageComponents/PageTitle';
import Notes from '@/components/PageComponents/Notes/Notes';

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

import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/PageComponents/PageTitle';
import Notes from '@/components/PageComponents/Notes/Notes';

const AppIDIPSURL = () => {
  const markdownFilePath = 'NetworkSecurity/Firewalls/Advanced/NGFWFeatures/AppIDIPSURL';

  return (
    <>
      <PageLayout>
        <PageTitle title="App-ID / IPS / URL" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default AppIDIPSURL;

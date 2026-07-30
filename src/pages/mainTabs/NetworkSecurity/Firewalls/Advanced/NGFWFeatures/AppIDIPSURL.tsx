import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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

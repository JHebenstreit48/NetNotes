import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const ReqIndRespConf = () => {
  const markdownFilePath = 'Networking/Legacy/OSIModel/Basics/ServicePrimitives/ReqIndRespConf';

  return (
    <>
      <PageLayout>
        <PageTitle title="Req/Ind/Resp/Conf" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default ReqIndRespConf;

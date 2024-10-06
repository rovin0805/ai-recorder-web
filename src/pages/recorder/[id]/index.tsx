import { useCallback, useEffect, useState } from "react";
import { useRouter } from "next/router";
import Header from "@/components/Header";
import { Data, useDataContext } from "@/contexts/script";
import Tab from "@/components/Tab";
import Script from "@/components/Script";

const RecordingDetailPage = () => {
  const router = useRouter();
  const id = router.query.id;

  const { get } = useDataContext();
  const [data, setData] = useState<Data | null>(null);
  const [focusedTab, setFocusedTab] = useState<"script" | "summary">("script");

  useEffect(() => {
    if (typeof id === "string") {
      const document = get({ id });
      if (document != null) {
        setData(document);
        return;
      } else {
        // throw new Error("Cannot load data");
      }
    }
  }, [get, id]);

  const onPressScriptTab = useCallback(() => {
    setFocusedTab("script");
  }, []);
  const onPressSummaryTab = useCallback(() => {
    setFocusedTab("summary");
  }, []);

  return (
    <div className="h-screen bg-white flex flex-col">
      <Header title={"음성 기록"} />

      <div className="flex">
        <Tab
          title={"음성 기록"}
          focused={focusedTab === "script"}
          onClick={onPressScriptTab}
        />
        <Tab
          title={"요약"}
          focused={focusedTab === "summary"}
          onClick={onPressSummaryTab}
        />
      </div>

      <div className="flex-1 overflow-y-scroll overscroll-none">
        {data?.scripts != null && <Script scripts={data.scripts} />}
      </div>
    </div>
  );
};

export default RecordingDetailPage;

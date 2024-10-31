import api from "./axios";

export const AnalyzeWebsite = async (url: string) => {
  return await api.post("analyze", { url: url });
};

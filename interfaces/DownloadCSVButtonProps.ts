import { Dispatch, SetStateAction } from "react";

export default interface DownloadCSVButtonProps {
  artistName: string;
  fileName: string;
  validateDownload: () => true | undefined;
  loadingDownload: boolean;
  setLoadingDownload: Dispatch<SetStateAction<boolean>>;
}

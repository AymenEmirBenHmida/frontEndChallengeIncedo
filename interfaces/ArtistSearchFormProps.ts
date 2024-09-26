import { Dispatch, SetStateAction } from "react";

export default interface ArtistSearchFormProps {
  artistName: string;
  fileName: string;
  setArtistName: (value: string) => void;
  setFileName: (value: string) => void;
  errors: {
    artistName?: string;
    fileName?: string;
  };
  loadingSearch: boolean;
  loadingDownload: boolean;
  setLoadingDownload: Dispatch<SetStateAction<boolean>>;
  handleSearch: () => Promise<void>;
  validateDownload: () => true | undefined;
  openSnackbar: (message: string, success: boolean) => void;
}

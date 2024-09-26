import { Button, Label, TextInput, Spinner, Card } from "flowbite-react";
import DownloadCSVButton from "./DownloadCSVButton";
import ArtistSearchFormProps from "@/interfaces/ArtistSearchFormProps";

const ArtistSearchForm: React.FC<ArtistSearchFormProps> = ({
  artistName,
  fileName,
  setArtistName,
  setFileName,
  errors,
  loadingSearch,
  handleSearch,
  loadingDownload,
  setLoadingDownload,
  validateDownload,
  openSnackbar,
}) => {
  return (
    <div className="flex justify-between items-center mb-5">
      <Card>
        <form className="flex items-end flex-row gap-4 ">
          <div>
            <div className="mb-2 block">
              <Label htmlFor="name" value="Artist name" />
            </div>
            <TextInput
              id="name"
              type="text"
              onChange={(e) => {
                setArtistName(e.target.value);
              }}
            />
            {errors.artistName && (
              <div className="text-red-500 mt-2">
                <p className="text-sm">{errors.artistName}</p>
              </div>
            )}
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="fileName" value="File name" />
            </div>
            <TextInput
              id="fileName"
              type="text"
              required
              onChange={(e) => {
                setFileName(e.target.value);
              }}
            />
            {errors.fileName && (
              <div className="text-red-500 mt-2">
                <p className="text-sm">{errors.fileName}</p>
              </div>
            )}
          </div>
          <div>
            <Button
              color="blue"
              onClick={async () => {
                await handleSearch();
              }}
            >
              {loadingSearch ? (
                <div className="flex items-center">
                  <Spinner color="success" aria-label="Info spinner example" />
                </div>
              ) : (
                "Search"
              )}
            </Button>
          </div>
        </form>
      </Card>
      <DownloadCSVButton
        openSnackbar={openSnackbar}
        setLoadingDownload={setLoadingDownload}
        loadingDownload={loadingDownload}
        validateDownload={validateDownload}
        artistName={artistName}
        fileName={fileName}
      />
    </div>
  );
};
export default ArtistSearchForm;

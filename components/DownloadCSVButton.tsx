import React from "react";
import DownloadCSVButtonProps from "@/interfaces/DownloadCSVButtonProps";
import { Button, Spinner } from "flowbite-react";
import { downloadArtists } from "@/app/api/artistApi";

const DownloadCSVButton: React.FC<DownloadCSVButtonProps> = ({
  artistName,
  fileName,
  validateDownload,
  loadingDownload,
  setLoadingDownload,
}) => {
  //handle downloading file
  const handleDownload = async (name: string, fileName: string) => {
    try {
      //validate
      if (await validateDownload()) {
        setLoadingDownload(true);
        const csvData: string = await downloadArtists(fileName, name); // Assuming it returns CSV content as string
        // Create a blob URL
        const url = window.URL.createObjectURL(
          new Blob([csvData], { type: "text/csv" })
        );

        // Create a link element
        const link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", `${fileName}.csv`);

        // Append to the body and click to trigger download
        document.body.appendChild(link);
        link.click();

        // Clean up
        link.parentNode?.removeChild(link);
        window.URL.revokeObjectURL(url);
        setLoadingDownload(false);
      }
    } catch (error) {
      setLoadingDownload(false);
      console.error("Error downloading csv:", error);
    }
  };
  return (
    <Button
      className="mt-9"
      color={"success"}
      onClick={() => {
        handleDownload(artistName, fileName);
      }}
    >
      {loadingDownload ? (
        <div className="flex items-center">
          <Spinner color="success" aria-label="Info spinner example" />
        </div>
      ) : (
        "Download"
      )}
    </Button>
  );
};
export default DownloadCSVButton;

import React from "react";
import axios from "axios";
import DownloadCSVButtonProps from "@/interfaces/DownloadCSVButtonProps";
import { downloadArtists } from "@/api/artistApi";
import { Button } from "flowbite-react";

const DownloadCSVButton: React.FC<DownloadCSVButtonProps> = ({
  artistName,
  fileName,
}) => {
  const handleDownload = async (name: string, fileName: string) => {
    try {
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
    } catch (error) {
      console.error("Error downloading csv:", error);
    }
  };
  return (
    <Button
      onClick={() => {
        handleDownload(artistName, fileName);
      }}
    >
      download
    </Button>
  );
};
export default DownloadCSVButton;

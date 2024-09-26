"use client";
import { useState } from "react";
import Artist from "@/interfaces/Artist";
import { downloadSchema, searchSchema } from "@/schemas/artistSchemas";
import { z } from "zod";
import SnackbarExample from "@/components/SnackBar";
import ArtistSearchForm from "@/components/ArtistSearchForm";
import ArtistTable from "@/components/ArtistsTable";
import { searchArtists } from "./api/artistApi";

export default function Home() {
  //file name state variable
  const [fileName, setFileName] = useState("");
  //artist name state variable
  const [artistName, setArtistName] = useState("");
  //the list of artists satate variables
  const [artists, setArtists] = useState<Artist[]>([]);
  //validation errors state variable
  const [errors, setErrors] = useState<{
    artistName?: string;
    fileName?: string;
  }>({});
  //state variable responsible for the search loading animation
  const [loadingSearch, setLoadingSearch] = useState(false);
  //state variable responsible for the download file animation
  const [loadingDownload, setLoadingDownload] = useState(false);
  //state variable to show or hide toast
  const [showToast, setShowToast] = useState(false);
  //state variable for setting the toast message type either a success or error
  const [snackbarSuccess, setSnackbarSuccess] = useState(true);
  //state variable for setting the toast message
  const [snackbarMessage, setSnackbarMessage] = useState("");
  //function responsible for setting the information necessary for the toast
  const openSnackbar = (message: string, success: boolean) => {
    setSnackbarMessage(message);
    setSnackbarSuccess(success);
    setShowToast(true);
    //auto-hide after 6 seconds
    setTimeout(() => {
      setShowToast(false);
    }, 6000);
  };
  //closes toast message
  const handleClose = () => {
    setShowToast(false);
  };
  //function for validating the form and the info necessary for doing the search
  const validateSearch = async () => {
    try {
      setErrors({});
      searchSchema.parse({ artistName });
      return true;
    } catch (error) {
      if (error instanceof z.ZodError) {
        const newErrors: { artistName?: string } = {};
        error.errors.forEach((err) => {
          if (err.path.includes("artistName")) {
            newErrors.artistName = err.message;
          }
        });
        setErrors(newErrors);
      }
    }
  };
  //function for validating the form and the info necessary for downloading the file
  const validateDownload = () => {
    try {
      setErrors({});
      downloadSchema.parse({ artistName, fileName });
      return true;
    } catch (error) {
      if (error instanceof z.ZodError) {
        const newErrors: { artistName?: string; fileName?: string } = {};
        error.errors.forEach((err) => {
          if (err.path.includes("artistName")) {
            newErrors.artistName = err.message;
          }
          if (err.path.includes("fileName")) {
            newErrors.fileName = err.message;
          }
        });
        setErrors(newErrors);
      }
    }
  };
  //function for calling the api and searching for the artist
  const search = async () => {
    try {
      if (await validateSearch()) {
        setArtists([]);
        setLoadingSearch(true);
        const response = await searchArtists(fileName, artistName);
        setArtists(response.data);
        openSnackbar("Successful search", true);
        setLoadingSearch(false);
        console.log(response.data);
      }
    } catch (error: any) {
      openSnackbar("There was an error", false);
      setLoadingSearch(false);
      console.error(error);
    }
  };
  return (
    <div>
      <ArtistSearchForm
        openSnackbar={openSnackbar}
        artistName={artistName}
        fileName={fileName}
        setArtistName={setArtistName}
        setFileName={setFileName}
        errors={errors}
        loadingSearch={loadingSearch}
        loadingDownload={loadingDownload}
        setLoadingDownload={setLoadingDownload}
        handleSearch={search}
        validateDownload={validateDownload}
      />
      {<ArtistTable artists={artists} loading={loadingSearch} />}
      {showToast && (
        <SnackbarExample
          handleClose={handleClose}
          snackbarMessage={snackbarMessage}
          snackbarSuccess={snackbarSuccess}
        />
      )}
    </div>
  );
}

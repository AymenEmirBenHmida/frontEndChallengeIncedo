import { z } from "zod";

//schema for searching
const searchSchema = z.object({
  artistName: z.string().min(1, { message: "Artist name is required" }),
});
//schema for downloading
const downloadSchema = z.object({
  artistName: z.string().min(1, { message: "Artist name is required" }),
  fileName: z.string().min(1, { message: "File name is required" }),
});

export { searchSchema, downloadSchema };

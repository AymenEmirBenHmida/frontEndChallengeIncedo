import ArtistTableProps from "@/interfaces/ArtistTableProps";
import { Pagination, Spinner, Table } from "flowbite-react";
import { useState } from "react";

const ArtistTable: React.FC<ArtistTableProps> = ({ artists, loading }) => {
  //the number of artists per page
  const itemsPerPage = 10;
  //the number of the current page
  const [currentPage, setCurrentPage] = useState(1);
  //the number of the total pages
  const totalPages = Math.ceil(artists.length / itemsPerPage);
  //handler for changing current page
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };
  //the data that's displayed
  const paginatedData = artists.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );
  return (
    <div>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <Table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <Table.Head className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <Table.HeadCell>Name</Table.HeadCell>
            <Table.HeadCell>Mbid</Table.HeadCell>
            <Table.HeadCell>Url</Table.HeadCell>
            <Table.HeadCell>Image</Table.HeadCell>
          </Table.Head>
          <Table.Body className="divide-y">
            {loading
              ? [1, 2, 3, 4, 5].map((i) => (
                  <Table.Row key={i} className="animate-pulse">
                    <Table.Cell className="px-6 py-4">
                      <div className="h-4 bg-gray-200 rounded w-3/4"></div>{" "}
                    </Table.Cell>
                    <Table.Cell className="px-6 py-4">
                      <div className="h-4 bg-gray-200 rounded w-3/4"></div>{" "}
                    </Table.Cell>
                    <Table.Cell className="px-6 py-4">
                      <div className="h-4 bg-gray-200 rounded w-3/4"></div>{" "}
                    </Table.Cell>
                    <Table.Cell className="px-6 py-4">
                      <div className="h-4 bg-gray-200 rounded w-3/4"></div>{" "}
                    </Table.Cell>
                  </Table.Row>
                ))
              : paginatedData.map((artist, index) => {
                  const key = artist.mbid ? artist.mbid : `artist-${index}`;
                  return (
                    <Table.Row
                      key={key}
                      className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                    >
                      <Table.Cell className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        {artist.name}
                      </Table.Cell>
                      <Table.Cell className="px-6 py-4">
                        {artist.mbid}
                      </Table.Cell>
                      <Table.Cell className="px-6 py-4">
                        {artist.url}
                      </Table.Cell>
                      {artist.image && (
                        <Table.Cell className="px-6 py-4">
                          <img
                            src={artist.image}
                            alt={`Image of ${artist.name}`}
                            loading="lazy"
                            className="rounded-lg"
                          />
                        </Table.Cell>
                      )}
                    </Table.Row>
                  );
                })}
          </Table.Body>
        </Table>
      </div>
      <div className="flex justify-center items-center py-4">
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </div>
    </div>
  );
};

export default ArtistTable;

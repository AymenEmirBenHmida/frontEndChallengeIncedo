# Artist Search API Front-End

This is a front-end challenge built using **Next.js**, TypeScript, Tailwind CSS, and Flowbite React. It interfaces with a Node.js backend API to search for artists and download the search results as a CSV file. The application handles cases where no search results are found by retrieving random artist names from a JSON file.

## Features

- Search for artists by name.
- Display search results in a paginated table (10 artists per page).
- Download artist data as a CSV file with a custom filename.
- Handle cases where no results are found by using random artist names from a predefined JSON file.

## Prerequisites

Make sure you have the following installed on your system:

- [Node.js](https://nodejs.org/) (version >= 14)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
- [Next.js](https://nextjs.org/)

## Installation

To set up the project locally, follow these steps:

1. Clone the repository:

    ```bash
    git clone https://github.com/AymenEmirBenHmida/frontEndChallengeIncedo.git
    ```

2. Navigate to the project directory:

    ```bash
    cd frontEndChallengeIncedo
    ```

3. Install dependencies:

    ```bash
    npm install
    ```

4. Set up the environment variables (explained below).

5. Run the development server:

    ```bash
    npm run dev
    ```

    The application should now be running at `http://localhost:3000`.

## Environment Variables

To configure the application to communicate with the API, you'll need to add the following environment variables in a `.env` file at the root of your project:

# .env file
NEXT_PUBLIC_API_BASE_URL="http://localhost:3001/api"
This sets the base URL for your API, which will be used for both search and download requests.

## Input Validation

### Search Form

In the search form, only the artist name is required to perform a search. The form will not accept empty submissions for this field. This ensures that the search is performed only when a valid artist name is provided by the user. If the artist name is missing, the user will be prompted with an error message asking them to enter a valid artist name before submitting.

### Download Form

The download form requires both the artist name and a file name to be filled out before allowing the download of artist data in CSV format. These fields are necessary for the following reasons:

- **Artist Name**: Identifies which artist's data you want to download.
- **File Name**: Specifies the name under which the CSV file will be saved.

If either of these fields is missing, the user will receive an error prompting them to complete both fields before proceeding.

## How to Use

### Searching for Artists

1. Enter the artist name in the search input field.
2. Press the "Search" button to fetch artist data.
3. The results will be displayed in a paginated table format (10 artists per page).

### Downloading Artist Data

1. Enter both the artist name and file name in the download form.
2. Press the "Download" button to download a CSV file containing the artist data.

## Technologies Used

- **Next.js**: Framework for server-side rendering and static site generation.
- **React**: Frontend framework for building user interfaces.
- **TypeScript**: For type safety and better developer experience.
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **Flowbite React**: UI components built with Tailwind CSS.
- **Zod**: For form validation.
- **Axios**: For making HTTP requests to the API.

import React from "react";

const Search = () => {
    return (
        <Box bgcolor="grey">
            <Heading />

            <Navbar />

            <form action="search">
                <label for="fname">First Name</label>
                <input type="text" id="fname" name="firstName" />

                <label for="lname">Last Name</label>
                <input type="text" id="lname" name="lastName" />

                <Button type="submit">Search</Button>
            </form>

            <Button variant="contained" href="./newProfile.html"> Create a new profile </Button>
        </Box >
    );
};

export default Search;
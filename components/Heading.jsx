import React from "react";
import { Typography } from "@mui/material";

const Heading = () => {
    return (
        <div>
            <Typography variant="h2" className="main-heading">db-friends</Typography>
            <Typography variant="h5" className="sub-heading">
                A database platform to keep for friends and contacts
            </Typography>
        </div>
    );
}

export default Heading;
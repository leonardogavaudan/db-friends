import React from "react";

import { Typography } from "@material-ui/core";

const Heading = () => {
    return (
        <div>
            <Typography variant="h3" className="main-heading">db-friends</Typography>
            <Typography variant="h6" className="sub-heading">
                A database platform to keep for friends and contacts
            </Typography>
        </div>
    );
}

export default Heading;
"use client";

import * as React from "react";
import { experimentalStyled as styled } from "@mui/material/styles";
import { Box, Paper, Grid, Typography } from "@mui/material";
// import Box from "@mui/material/Box";
// import Paper from "@mui/material/Paper";
// import Grid from "@mui/material/Grid";

export default function GridView({ items }) {
  return (
    <Grid container spacing={"2.734vw"}>
      {items.map((item, index) => (
        <Grid item key={index}>
          <img
            src={item.image}
            alt={item.title}
            style={{ width: "19.375vw", height: "auto", aspectRatio: 1.4206 }}
          />
        </Grid>
      ))}
    </Grid>
  );
}

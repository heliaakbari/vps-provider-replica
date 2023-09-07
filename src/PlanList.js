import * as React from "react";
import Radio from "@mui/material/Radio";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import Tooltip from "@mui/material/Tooltip";
import Box from "@mui/material/Box";
export default function PlanList({
  regionPlans,
  setSelectedPlan,
  selectedPlan,
}) {
  if (regionPlans) {
    return (
      <TableContainer>
        <Table
          sx={{
            width: "100%",
            "& .MuiTableCell-root": {
              borderBottom: "1px solid rgba(0,0,0,0.1)",
              height: 56,
              p: 0,
            },
          }}
          aria-label="simple table"
        >
          <TableHead>
            <TableRow>
              <TableCell
                align="center"
                sx={{
                  width: "15%",
                }}
              ></TableCell>
              <TableCell
                sx={{
                  width: "19%",
                }}
              >
                CPU
              </TableCell>
              <TableCell
                sx={{
                  width: "20%",
                }}
              >
                Memory
              </TableCell>
              <TableCell
                sx={{
                  width: "27%",
                }}
              >
                Connection speed
              </TableCell>
              <TableCell
                sx={{
                  width: "19%",
                }}
              >
                Monthly price
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {Array.from(regionPlans).map((plan, index) => (
              <TableRow
                key={index}
                sx={{
                  "&:last-child td, &:last-child th": { border: 0 },
                  "& .MuiTableCell-root": {
                    fontWeight: 400,
                  },
                }}
              >
                <TableCell
                  align="center"
                  component="th"
                  scope="row"
                  sx={{
                    w: "100%",
                  }}
                >
                  <Radio
                    checked={selectedPlan == index}
                    name="radio-buttons"
                    onClick={setSelectedPlan(index)}
                    value={index}
                    key={index}
                  />
                </TableCell>
                <TableCell>{plan.cpu_cores} CPU</TableCell>
                <TableCell>{plan.memory_size_in_GB} GB</TableCell>
                <TableCell>
                  Up to {plan.connection_up_bound_speed} Gbps
                </TableCell>
                <TableCell sx={{ display: "flex", alignItems: "center", justifyContent:"space-between",}}>
                  <Box>$ {plan.monthly_price}</Box>
                  <Tooltip
                    title={plan.hourly_price + "/hour"}
                    sx={{
                      display: "flex",
                      alignItems: "center",
                    }}
                    followCursor
                  >
                    <InfoOutlinedIcon
                      sx={{
                        ml: "20px",
                        p: 0,
                        color: "rgba(158, 158, 158, 1)",
                        "&:hover": { color: "black" },
                        marginRight:"50px" 
                      }}
                    />{" "}
                  </Tooltip>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
  }
}

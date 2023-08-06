import * as React from "react";
import Radio from "@mui/material/Radio";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";



function createData(index,cpu, memory, storage, speed, monthly, hourly) {
  return { index,cpu, memory, storage, speed, monthly, hourly };
}

const rows = [
  createData(0,1, 1, 15, 1, 4.5),
  createData(1,2, 2, 30, 1, 8.95),
  createData(2,4, 4, 60, 1, 19.95),
  createData(3,6, 8, 120, 1, 36.95),
];

export default function PlanList() {

    const [selectedPlan, setSelectedPlan] = React.useState(0);

    const handleChange = (event) => {
      setSelectedPlan(event.target.value);
      console.log("x")
    };

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
                width: "12%",
              }}
            ></TableCell>
            <TableCell
              sx={{
                width: "18%",
              }}
            >
              CPU
            </TableCell>
            <TableCell
              sx={{
                width: "18%",
              }}
            >
              Memory
            </TableCell>
            <TableCell
              sx={{
                width: "18%",
              }}
            >
              Storage
            </TableCell>
            <TableCell
              sx={{
                width: "18%",
              }}
            >
              Connection speed
            </TableCell>
            <TableCell
              sx={{
                width: "16%",
              }}
            >
              Monthly price
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
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
                  checked={selectedPlan == row.index}
                  name="radio-buttons"
                  onChange={handleChange}
                  value={row.index}
                />
              </TableCell>
              <TableCell>{row.cpu} CPU</TableCell>
              <TableCell>{row.memory} GB</TableCell>
              <TableCell>{row.storage} GB</TableCell>
              <TableCell>Up to {row.speed} Gbps</TableCell>
              <TableCell>$ {row.monthly}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

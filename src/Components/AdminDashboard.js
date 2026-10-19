import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Grid2";
import { useAuth } from "../AuthContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  Typography,
} from "@mui/material";

function AdminDashboard() {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const [donations, setDonations] = useState([]); // Store fetched donations
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/admin-login");
    } else {
      fetchDonations(); // Fetch donations if authenticated
    }
  }, [isAuthenticated, navigate]);

  const fetchDonations = async () => {
    setLoading(true);
    setError("");

    try {
      const response = await axios.get(
        `${process.env.REACT_APP_PUBLIC_BASE_URL}/donation/donation-list`,
      );

      setDonations(
        Array.isArray(response.data) ? [...response.data].reverse() : [],
      );
    } catch (error) {
      console.error("Error fetching donations:", error);
      setError("Unable to load donations. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  // Handle page change
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  // Handle rows per page change
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  return (
    <Box sx={{ padding: 3 }}>
      <Typography
        variant="h4"
        sx={{ mb: 2, fontWeight: "bold", textAlign: "center" }}
      >
        Donation Listing
      </Typography>
      <Typography variant="body1" sx={{ mb: 3, textAlign: "center" }}>
        Here is a list of donations received.
      </Typography>

      <Grid container justifyContent="center">
        <Grid item xs={12} md={10}>
          <TableContainer
            component={Paper}
            sx={{ overflowX: "auto", borderRadius: 2 }}
          >
            <Table>
              <TableHead sx={{ backgroundColor: "#1976d2" }}>
                <TableRow>
                  {[
                    "Name",
                    "Email",
                    "Amount",
                    "DOB",
                    "Address",
                    "Pin Code",
                    "Country",
                    "Payment ID",
                    "Payment Date",
                    "Status",
                  ].map((header) => (
                    <TableCell
                      key={header}
                      sx={{
                        color: "#fff",
                        fontWeight: "bold",
                        textAlign: "center",
                      }}
                    >
                      {header}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>

              <TableBody>
                {loading ? (
                  <TableRow>
                    <TableCell colSpan={10} sx={{ textAlign: "center", py: 2 }}>
                      Loading donations...
                    </TableCell>
                  </TableRow>
                ) : error ? (
                  <TableRow>
                    <TableCell
                      colSpan={10}
                      sx={{ textAlign: "center", py: 2, color: "error.main" }}
                    >
                      {error}
                    </TableCell>
                  </TableRow>
                ) : donations.length > 0 ? (
                  donations
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map((donation) => (
                      <TableRow key={donation._id}>
                        <TableCell sx={{ textAlign: "center" }}>
                          {donation.name}
                        </TableCell>
                        <TableCell sx={{ textAlign: "center" }}>
                          {donation.email}
                        </TableCell>
                        <TableCell sx={{ textAlign: "center" }}>
                          ₹{donation.amount}
                        </TableCell>
                        <TableCell sx={{ textAlign: "center" }}>
                          {donation.dob
                            ? new Date(donation.dob).toLocaleDateString(
                                "en-IN",
                                {
                                  year: "numeric",
                                  month: "long",
                                  day: "numeric",
                                },
                              )
                            : "N/A"}
                        </TableCell>
                        <TableCell sx={{ textAlign: "center" }}>
                          {donation.address}
                        </TableCell>
                        <TableCell sx={{ textAlign: "center" }}>
                          {donation.pincode}
                        </TableCell>
                        <TableCell sx={{ textAlign: "center" }}>
                          {donation.country}
                        </TableCell>
                        <TableCell sx={{ textAlign: "center" }}>
                          {donation.paymentId || "N/A"}
                        </TableCell>
                        <TableCell sx={{ textAlign: "center" }}>
                          {donation.paymentDate
                            ? new Date(donation.paymentDate).toLocaleString(
                                "en-IN",
                              )
                            : "N/A"}
                        </TableCell>
                        <TableCell sx={{ textAlign: "center" }}>
                          {donation.status || "N/A"}
                        </TableCell>
                      </TableRow>
                    ))
                ) : (
                  <TableRow>
                    <TableCell colSpan={10} sx={{ textAlign: "center", py: 2 }}>
                      No donations found.
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </TableContainer>

          {/* Pagination */}
          <TablePagination
            rowsPerPageOptions={[10, 25, 50]}
            component="div"
            count={donations.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Grid>
      </Grid>
    </Box>
  );
}

export default AdminDashboard;

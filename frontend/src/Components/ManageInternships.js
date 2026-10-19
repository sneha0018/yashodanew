import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  Typography,
  Modal,
  TablePagination,
  Box,
  TextField,
} from "@mui/material";
import Grid from '@mui/material/Grid2';


function ManageInternships() {
  const [internships, setInternships] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5); // Default 5 rows per page
  const [editOpen, setEditOpen] = useState(false);
  const [deleteOpen, setDeleteOpen] = useState(false);
  const [deleteId, setDeleteId] = useState(null);
  const [currentInternship, setCurrentInternship] = useState({ id: "", jobTitle: "", salary: "" });


  // Fetch internships from API
  useEffect(() => {
    fetchInternships();
  }, []);

  const fetchInternships = async () => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_PUBLIC_BASE_URL}/internship/internships`);
      setInternships(response.data);
    } catch (error) {
      console.error("Error fetching internships:", error);
    }
  };

   // Open Edit Modal
   const handleEditOpen = (internship) => {
    setCurrentInternship({ id: internship._id, jobTitle: internship.jobTitle, salary: internship.salary });
    setEditOpen(true);
  };

  // Close Edit Modal
  const handleEditClose = () => {
    setEditOpen(false);
    setCurrentInternship({ id: "", jobTitle: "", salary: "" });
  };

  const handleUpdate = async () => {
    try {
      await axios.put(`${process.env.REACT_APP_PUBLIC_BASE_URL}/internship/internships/${currentInternship.id}`, {
        jobTitle: currentInternship.jobTitle,
        salary: currentInternship.salary,
      });
      alert("Internship updated successfully!");
      fetchInternships();
      handleEditClose();
    } catch (error) {
      console.error("Error updating internship:", error);
    }
  };

   // Open Delete Confirmation Modal
   const handleDeleteOpen = (id) => {
    setDeleteId(id);
    setDeleteOpen(true);
  };

  // Close Delete Confirmation Modal
  const handleDeleteClose = () => {
    setDeleteOpen(false);
    setDeleteId(null);
  };
  // Delete Internship
  const handleDelete = async (id) => {
    try {
      await axios.delete(`${process.env.REACT_APP_PUBLIC_BASE_URL}/internship/internships/${id}`);
      alert("Internship deleted successfully!");
      fetchInternships();
      handleDeleteClose();
    } catch (error) {
      console.error("Error deleting internship:", error);
    }
  };

  // Handle page change
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  // Handle rows per page change
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0); // Reset to first page
  };

  return (
    <Grid
      container
      justifyContent="center"
    //   alignItems="center"
      sx={{ minHeight: "100vh", padding: "20px", backgroundColor: "#aeaeea" }}
    >
      <Grid item xs={12} md={8}>
        {/* Title */}
        <Typography
          variant="h3"
          align="center"
          sx={{ marginBottom: "20px", fontSize: { xs: "1.8rem", sm: "2.5rem" } }}
        >
          INTERNSHIP LIST
        </Typography>

        {/* Table Container */}
        <TableContainer component={Paper} sx={{ borderRadius: "10px" }}>
          <Table>
            <TableHead>
              <TableRow sx={{ backgroundColor: "#e0e0e0" }}>
                <TableCell align="center"><b>Job Title</b></TableCell>
                <TableCell align="center"><b>Salary</b></TableCell>
                <TableCell align="center"><b>Actions</b></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {internships.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((internship) => (
                <TableRow key={internship._id}>
                  <TableCell align="center">{internship.jobTitle}</TableCell>
                  <TableCell align="center">{internship.salary}</TableCell>
                  <TableCell align="center">
                  <Button color="primary" sx={{ marginRight: "10px" }} onClick={() => handleEditOpen(internship)}>
                      Edit
                    </Button>
                    <Button color="error" onClick={() => handleDeleteOpen(internship._id)}>
                      Delete
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>


        {/* Pagination */}
        <TablePagination
          component="div"
          count={internships.length}
          page={page}
          onPageChange={handleChangePage}
          rowsPerPage={rowsPerPage}
          onRowsPerPageChange={handleChangeRowsPerPage}
          rowsPerPageOptions={[5, 10, 25]}
        />

<Grid item container size={12} className="justify-content-center">
              <Button href="/#/add-internship" sx={{border: '1px solid #FFF', backgroundColor: '#FFF'}}>Back to Internship</Button>
      </Grid>
      </Grid>

      

      <Modal open={editOpen} onClose={handleEditClose}>
        <Box sx={modalStyle}>
          <Typography variant="h5" gutterBottom>Edit Internship</Typography>
          <TextField
            label="Job Title"
            fullWidth
            margin="normal"
            value={currentInternship.jobTitle}
            onChange={(e) => setCurrentInternship({ ...currentInternship, jobTitle: e.target.value })}
          />
          <TextField
            label="Salary"
            fullWidth
            margin="normal"
            value={currentInternship.salary}
            onChange={(e) => setCurrentInternship({ ...currentInternship, salary: e.target.value })}
          />
          <Button variant="contained" color="primary" fullWidth sx={{ mt: 2 }} onClick={handleUpdate}>
            Update
          </Button>
          <Button variant="outlined" color="secondary" fullWidth sx={{ mt: 1 }} onClick={handleEditClose}>
            Cancel
          </Button>
        </Box>
      </Modal>

            {/* Delete Confirmation Modal */}
            <Modal open={deleteOpen} onClose={handleDeleteClose}>
        <Box sx={modalStyle}>
          <Typography variant="h6">Are you sure you want to delete this internship?</Typography>
          <Button variant="contained" color="error" fullWidth sx={{ mt: 2 }} onClick={handleDelete}>
            Yes, Delete
          </Button>
          <Button variant="outlined" color="secondary" fullWidth sx={{ mt: 1 }} onClick={handleDeleteClose}>
            Cancel
          </Button>
        </Box>
      </Modal>

    </Grid>
  );
}

// Modal Styles
const modalStyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    boxShadow: 24,
    p: 3,
    borderRadius: 2,
  };
  

export default ManageInternships;

import axios from 'axios';

const getVehicleData = async () => {
  const token = localStorage.getItem('token');
  const response = await axios.get('/vehicle', {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
};

const updateVehicleData = async (updatedData) => {
  const token = localStorage.getItem('token');
  await axios.post('/vehicle/update', updatedData, {
    headers: { Authorization: `Bearer ${token}` },
  });
};

const vehicleService = {
  getVehicleData,
  updateVehicleData,
};

export default vehicleService;
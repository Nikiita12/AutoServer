import React, { useState, useEffect } from 'react';
import vehicleService from '../services/vehicleService';

const VehicleDataComponent = () => {
  const [vehicleData, setVehicleData] = useState(null);

  useEffect(() => {
    const fetchVehicleData = async () => {
      try {
        const data = await vehicleService.getVehicleData();
        setVehicleData(data);
      } catch (error) {
        console.error('Error fetching vehicle data:', error);
      }
    };
    fetchVehicleData();
  }, []);

  const handleUpdateVehicleData = async () => {
    try {
      await vehicleService.updateVehicleData({ /* updated data */ });
    } catch (error) {
      console.error('Error updating vehicle data:', error);
    }
  };

  return (
    <div>
      <h2>Vehicle Data</h2>
      {vehicleData ? (
        <div>
          {/* Display vehicle data */}
          <button onClick={handleUpdateVehicleData}>Update Vehicle Data</button>
        </div>
      ) : (
        <div>Loading vehicle data...</div>
      )}
    </div>
  );
};

export default VehicleDataComponent;
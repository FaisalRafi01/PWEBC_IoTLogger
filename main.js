// Constants untuk InfluxDB
const ORG_NAME = 'PWEBC';
const BUCKET_NAME = 'IoT_Logger';
const API_TOKEN = '3-Wg9eksxaqGsB-DXdCUilHczT4q3YTQzrXoX3g7O3b4r7Qq1dbAVdDW00uCEyqULssyp86aQUz6aOKVgA_CHw==';
const BASE_URL = 'http://localhost:8086/api/v2';

let selectedDevice = 'device1';
let chartInstance;

document.addEventListener('DOMContentLoaded', function () {
    const devicesData = JSON.parse(localStorage.getItem('devicesData')) || [];

    if (devicesData.length === 0) {
        console.log('No data found in local storage! Using default values.');
    } else {
        console.log('Devices data loaded from localStorage:', devicesData);
        displayData(devicesData);
    }

    function displayData(devicesData) {
        // Logic to display devices data in the UI
        console.log(devicesData);
    }
});

document.getElementById('processDataButton').addEventListener('click', updateDeviceData);

// Load data from local storage
let devicesData = JSON.parse(localStorage.getItem('devicesData'));

// Fungsi untuk menampilkan data sensor terbaru
function displayLatestData() {
    const device = devicesData[selectedDevice];
    if (!device) {
        console.error(`No data found for ${selectedDevice}`);
        return;
    }

    document.getElementById('humidityValue').textContent = `${device.humidity}%`;
    document.getElementById('nitrogenValue').textContent = `${device.nitrogen} mg/kg`;
    document.getElementById('phosporValue').textContent = `${device.phospor}`;
    document.getElementById('kaliumValue').textContent = `${device.kalium} mg/kg`;
    document.getElementById('temperatureValue').textContent = `${device.temperature}°C`;
    document.getElementById('phValue').textContent = `${device.ph}`;
    document.getElementById('conductivityValue').textContent = `${device.conductivity}`;
}

// Fungsi untuk memperbarui grafik sensor
function updateSensorChart() {
    const selectedSensor = document.getElementById('sensorSelect').value;
    const deviceData = devicesData[selectedDevice];
    if (!deviceData) {
        console.error(`No data available for ${selectedDevice}`);
        return;
    }

    const labels = deviceData.history.map(item => item.timestamp);
    const sensorData = deviceData.history.map(item => item[selectedSensor]);

    if (chartInstance) chartInstance.destroy();
    const ctx = document.getElementById('sensorChart').getContext('2d');

    chartInstance = new Chart(ctx, {
        type: 'line',
        data: {
            labels: labels,
            datasets: [{
                label: selectedSensor,
                data: sensorData,
                borderColor: '#ED1C24',
                backgroundColor: 'rgba(237, 28, 36, 0.1)',
                borderWidth: 3,
                pointBackgroundColor: '#ED1C24',
                pointBorderColor: '#fff',
                pointRadius: 5,
                pointHoverRadius: 7,
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: '#ED1C24',
                fill: true,
                tension: 0.3
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'top',
                    labels: {
                        color: '#fff'
                    }
                }
            },
            scales: {
                x: {
                    display: true,
                    title: {
                        display: true,
                        text: 'Time',
                        color: '#fff'
                    },
                    ticks: {
                        color: '#fff'
                    }
                },
                y: {
                    display: true,
                    title: {
                        display: true,
                        text: 'Value',
                        color: '#fff'
                    },
                    ticks: {
                        color: '#fff'
                    },
                    grid: {
                        color: 'rgba(255, 255, 255, 0.2)'
                    }
                }
            }
        }
    });
}

// Fungsi untuk menulis data ke InfluxDB
function writeToInfluxDB(field, value, device) {
    const timestamp = Date.now() * 1000000;  // Convert to nanoseconds
    
    // Construct the line protocol data format for InfluxDB
    const data = `${device},field=${field} value=${value} ${timestamp}`;

    // Log the formatted data to verify its structure
    console.log('Writing data to InfluxDB:', data);

    // Send the data to InfluxDB
    fetch(`http://localhost:8086/api/v2/write?org=${ORG_NAME}&bucket=${BUCKET_NAME}&precision=ns`, {
        method: 'POST',
        headers: {
            'Authorization': `Token ${API_TOKEN}`,
            'Content-Type': 'text/plain'
        },
        body: data
    })
    .then(response => {
        if (response.ok) {
            console.log(`Successfully written: ${field}=${value}`);
        } else {
            console.error('Failed to write data:', response.statusText);
        }
    })
    .catch(error => {
        console.error('Error writing to InfluxDB:', error);
    });
}

// Fungsi untuk memperbarui data perangkat
function updateDeviceData() {
    selectedDevice = document.getElementById('deviceSelect').value;
    displayLatestData();

    // Menulis data ke InfluxDB untuk semua sensor
    const device = devicesData[selectedDevice];
    if (!device) {
        console.error(`No data available for ${selectedDevice}`);
        return;
    }

    // Writing each sensor's data to InfluxDB
    writeToInfluxDB('humidity', device.humidity, selectedDevice);
    writeToInfluxDB('nitrogen', device.nitrogen, selectedDevice);
    writeToInfluxDB('phospor', device.phospor, selectedDevice);
    writeToInfluxDB('kalium', device.kalium, selectedDevice);
    writeToInfluxDB('temperature', device.temperature, selectedDevice);
    writeToInfluxDB('ph', device.ph, selectedDevice);
    writeToInfluxDB('conductivity', device.conductivity, selectedDevice);
    updateSensorChart();
}

// Inisialisasi setelah DOM dimuat
document.addEventListener('DOMContentLoaded', function () {
    updateDeviceData();
});

document.addEventListener('DOMContentLoaded', function () {
    const fileInput = document.getElementById('fileInput');
    const uploadButton = document.getElementById('uploadBtn');
    const processDataButton = document.getElementById('processDataButton');
    const statusMessage = document.getElementById('statusMessage');
    
    // Ensure elements exist
    if (!uploadButton || !fileInput || !processDataButton) {
        console.error('Missing necessary elements in the HTML.');
        return;
    }

    // Event listener for file upload button click
    uploadButton.addEventListener('click', function () {
        fileInput.click(); // Trigger the file input dialog
    });

    // Handle file input change (file selection)
    fileInput.addEventListener('change', function () {
        const file = fileInput.files[0];
        processFile(file);
    });

    // Handle drag-and-drop file uploads
    const dropArea = document.getElementById('dropArea');
    dropArea.addEventListener('dragover', (event) => {
        event.preventDefault();
        dropArea.classList.add('dragging');
    });
    dropArea.addEventListener('dragleave', () => {
        dropArea.classList.remove('dragging');
    });
    dropArea.addEventListener('drop', (event) => {
        event.preventDefault();
        dropArea.classList.remove('dragging');
        const file = event.dataTransfer.files[0];
        processFile(file);
    });

    // Function to process the uploaded file
    function processFile(file) {
        if (!file) {
            updateStatusMessage('Tidak ada file yang diunggah.', true);
            return;
        }
    
        // Validate file extension
        if (file.type !== 'application/json') {
            updateStatusMessage('Hanya file .json yang diizinkan!', true);
            return;
        }
    
        const reader = new FileReader();
        reader.onload = function (event) {
            try {
                const jsonData = JSON.parse(event.target.result);
                // Assuming uploaded data has a similar structure to devicesData
                // Example: { device1: { humidity, nitrogen, ... }, device2: { humidity, nitrogen, ... } }
                uploadedConfigData = jsonData;
    
                // Convert uploaded data to the correct format if necessary
                // This step depends on the structure of your uploaded JSON file.
                const convertedData = convertToReadableFormat(uploadedConfigData);
                localStorage.setItem('devicesData', JSON.stringify(convertedData));
                console.log('Data berhasil diunggah:', convertedData);
                updateStatusMessage('File berhasil diproses dan disimpan sementara.');
    
                // Update devicesData in main.js
                devicesData = convertedData;
    
                // Optionally, update the UI after upload
                displayData(devicesData);
            } catch (error) {
                updateStatusMessage('File tidak valid. Pastikan file berformat JSON yang benar.', true);
                console.error('Error parsing JSON:', error);
            }
        };
    
        reader.onerror = function () {
            updateStatusMessage('Terjadi kesalahan saat membaca file.', true);
        };
    
        reader.readAsText(file);
    }
    
    function convertToReadableFormat(data) {
        // Convert the uploaded JSON into the same structure as devicesData in main.js
        // Example of transforming the data to match the structure of devicesData
        const formattedData = {};
        Object.keys(data).forEach(device => {
            formattedData[device] = {
                humidity: data[device].humidity || 0,
                nitrogen: data[device].nitrogen || 0,
                phospor: data[device].phospor || 0,
                kalium: data[device].kalium || 0,
                temperature: data[device].temperature || 0,
                ph: data[device].ph || 0,
                conductivity: data[device].conductivity || 0,
                history: data[device].history || []
            };
        });
        return formattedData;
    }


function convertToReadableFormat(data) {
    // Convert the uploaded JSON into the same structure as devicesData in main.js
    // Example of transforming the data to match the structure of devicesData
    const formattedData = {};
    Object.keys(data).forEach(device => {
        formattedData[device] = {
            humidity: data[device].humidity || 0,
            nitrogen: data[device].nitrogen || 0,
            phospor: data[device].phospor || 0,
            kalium: data[device].kalium || 0,
            temperature: data[device].temperature || 0,
            ph: data[device].ph || 0,
            conductivity: data[device].conductivity || 0,
            history: data[device].history || []
        };
    });
    return formattedData;
}

    // Function to upload data to the server or InfluxDB (implement your logic here)
    function uploadDataToServer(data) {
        console.log('Uploading data:', data);
        // Replace with your API call or InfluxDB upload logic
        // Example: fetch('/uploadData', { method: 'POST', body: JSON.stringify(data) });

        // Display success message after data upload
        updateStatusMessage('Data berhasil diunggah!', false);
    }
});

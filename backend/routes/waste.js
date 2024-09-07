const express = require('express');
const router = express.Router();

router.get('/collection-schedules', (req, res) => {
    // Logic to fetch and return waste collection schedules
    const schedules = [
        { area: 'Kampala Central', day: 'Monday', time: '8 AM - 10 AM' },
        // ... other schedules
    ];
    res.json(schedules);
});

module.exports = router;
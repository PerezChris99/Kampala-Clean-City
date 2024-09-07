const express = require('express');
const router = express.Router();
const ReportModel = require('../models/report');

router.post('/', upload.single('image'), async (req, res) => {
    try {
        const { location, description, priority } = req.body;
        const image = req.file.filename;

        const newReport = new ReportModel({ location, description, image, priority });
        await newReport.save();

        res.status(201).json({ message: 'Report created successfully' });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

router.get('/stats', async (req, res) => {
    try {
        const totalReports = await ReportModel.countDocuments();
        const pendingReports = await ReportModel.countDocuments({ status: 'pending' });
        const resolvedReports = await ReportModel.countDocuments({ status: 'resolved' });

        const stats = {
            totalReports,
            pendingReports,
            resolvedReports
        };

        res.json(stats);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
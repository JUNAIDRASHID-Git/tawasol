// Minimal JS for Works page - placeholder for future interactions
document.addEventListener('DOMContentLoaded', function () {
    // Add simple click handler for "View Details" buttons (non-blocking)
    document.querySelectorAll('.work-card .btn').forEach(function (btn) {
        btn.addEventListener('click', function (e) {
            e.preventDefault();
            // Placeholder behavior: show a small toast or console message
            console.log('View Details clicked - replace with modal or link to project page.');
            // Future: open modal with larger image and details
        });
    });
});

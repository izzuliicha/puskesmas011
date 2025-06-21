        function openDirection(destLat, destLng) {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(function (position) {
                    const userLat = position.coords.latitude;
                    const userLng = position.coords.longitude;
                    const mapsUrl = `https://www.google.com/maps/dir/?api=1&origin=${userLat},${userLng}&destination=${destLat},${destLng}&travelmode=driving`;
                    window.open(mapsUrl, '_blank');
                }, function () {
                    alert("Gagal mendapatkan lokasi Anda.");
                });
            } else {
                alert("Browser Anda tidak mendukung fitur lokasi.");
            }
        }
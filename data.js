// Datos del viaje
const travelData = {
    activities: [
        {
            id: 1,
            day: "Día 1",
            type: "bus",
            title: "Calpe - Alicante",
            company: "Bannloonsat / MessaConnect",
            time: "",
            details: {
                origin: "Calpe",
                destination: "Alicante",
                company: "Bannloonsat / MessaConnect"
            },
            links: [
                { name: "Información de la compañía", url: "https://www.messaconnect.com" },
                { name: "Reserva", url: "https://www.messaconnect.com/reservas" }
            ]
        },
        {
            id: 2,
            day: "Día 1",
            type: "plane",
            title: "Alicante - Madrid",
            company: "",
            time: "14:35 - 17:08",
            details: {
                origin: "Alicante",
                destination: "Madrid",
                departure: "14:35",
                arrival: "17:08",
                duration: "2h 33m"
            },
            links: [
                { name: "Aeropuerto Alicante", url: "https://www.aena.es/es/alicante.html" },
                { name: "Aeropuerto Madrid", url: "https://www.aena.es/es/madrid-barajas.html" },
                { name: "Check-in online", url: "https://www.aena.es/es/pasajeros/check-in-online.html" }
            ]
        },
        {
            id: 3,
            day: "Día 2",
            type: "hotel",
            title: "Hotel en Madrid",
            company: "",
            time: "",
            details: {
                checkIn: "15:00",
                checkOut: "11:00",
                address: "Madrid, España"
            },
            links: [
                { name: "Reserva", url: "#" },
                { name: "Ubicación", url: "https://www.google.com/maps/search/hoteles+en+madrid" }
            ]
        },
        {
            id: 4,
            day: "Día 3",
            type: "tour",
            title: "Tour por Madrid",
            company: "",
            time: "10:00",
            details: {
                duration: "4 horas",
                meetingPoint: "Plaza Mayor"
            },
            links: [
                { name: "Reservar tour", url: "#" },
                { name: "Más información", url: "#" }
            ]
        }
    ]
};


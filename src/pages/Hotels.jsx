import React, { useState } from "react";
import {
  Tabs,
  Tab,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
} from "@mui/material";
import { hotels } from "../Data/locations";
import { roomTypes } from "../Data/rooms";
import HotelSlider from "../Components/HotelSlider";

export default function Hotels() {
  const [tab, setTab] = useState(0);

  const selectedHotels = tab === 0 ? hotels.national : hotels.international;

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <div className="bg-black text-white py-16 text-center">
        <h1 className="text-4xl font-bold tracking-wide">Our Luxury Hotels</h1>
        <p className="mt-4 text-gray-300">
          Experience world-class comfort across elite destinations.
        </p>
      </div>

      {/* Tabs */}
      <div className="flex justify-center mt-10">
        <Tabs
          value={tab}
          onChange={(e, newValue) => setTab(newValue)}
          indicatorColor="primary"
          textColor="primary"
        >
          <Tab label="National" />
          <Tab label="International" />
        </Tabs>
      </div>

      {/* Hotel Grid */}
      <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-3 sm:grid-cols-2 gap-8">
        {selectedHotels.map((hotel) => (
          <Card
            id={`hotel-${hotel.id}`}
            className="rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 hover:scale-105"
          >
            <CardMedia
              component="img"
              height="220"
              image={`${hotel.image}?auto=format&fit=crop&w=800&q=80`}
              alt={hotel.name}
            />
            <CardContent>
              <Typography variant="h6" className="font-semibold">
                {hotel.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {hotel.location}
              </Typography>
              <Typography className="mt-2 font-medium text-black">
                {hotel.price}
              </Typography>

              <Button
                variant="contained"
                className="mt-4 bg-black hover:bg-gray-800"
                fullWidth
              >
                View Details
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
      <HotelSlider activeTab={tab} />

      {/* Room Section */}
      <div className="bg-white py-16">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-12">Room Categories</h2>

          <div className="grid md:grid-cols-3 gap-8 px-6">
            {roomTypes.map((room) => (
              <div
                key={room.id}
                className="p-8 bg-gray-100 rounded-2xl shadow-md hover:shadow-xl transition"
              >
                <h3 className="text-xl font-semibold mb-4">{room.title}</h3>
                <p className="text-gray-600">{room.description}</p>
                <button className="mt-6 px-6 py-2 bg-black text-white rounded-lg hover:bg-gray-800">
                  Explore
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

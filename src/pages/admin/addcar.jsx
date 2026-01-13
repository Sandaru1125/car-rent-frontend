import React, { useState } from "react";
import { toast } from "react-hot-toast";
import Mediauplod from "../utils/Mediauplod";
import axios from "axios";

export default function AddCar() {
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    make: "",
    model: "",
    year: "",
    color: "",
    price: "",
    description: "",
    image: "",
  });

  const [imageFile, setImageFile] = useState(null);

  // Handle input change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle image selection
  const handleImageChange = (e) => {
    setImageFile(e.target.files[0]);
  };

  // Submit form
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!imageFile) {
      toast.error("Please select an image");
      return;
    }

    try {
      setLoading(true);

      // Upload image to Supabase
      const imageUrl = await Mediauplod(imageFile);

      const carData = {
        ...formData,
        year: Number(formData.year),
        price: Number(formData.price),
        image: imageUrl,
      };

      // Send data to backend
      await axios.post("http://localhost:5000/api/cars", carData);

      toast.success("Car added successfully 🚗");

      // Reset form
      setFormData({
        make: "",
        model: "",
        year: "",
        color: "",
        price: "",
        description: "",
        image: "",
      });
      setImageFile(null);

    } catch (error) {
      console.error(error);
      toast.error("Failed to add car");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-3xl mx-auto bg-white rounded-xl shadow p-8">
        <h2 className="text-3xl font-bold mb-6 text-center">
          Add New Car
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">

          {/* Make */}
          <input
            type="text"
            name="make"
            placeholder="Make (BMW, Toyota)"
            value={formData.make}
            onChange={handleChange}
            required
            className="w-full border p-3 rounded-lg"
          />

          {/* Model */}
          <input
            type="text"
            name="model"
            placeholder="Model (X5, Prius)"
            value={formData.model}
            onChange={handleChange}
            required
            className="w-full border p-3 rounded-lg"
          />

          {/* Year */}
          <input
            type="number"
            name="year"
            placeholder="Year (2024)"
            value={formData.year}
            onChange={handleChange}
            required
            className="w-full border p-3 rounded-lg"
          />

          {/* Color */}
          <input
            type="text"
            name="color"
            placeholder="Color"
            value={formData.color}
            onChange={handleChange}
            required
            className="w-full border p-3 rounded-lg"
          />

          {/* Price */}
          <input
            type="number"
            name="price"
            placeholder="Price per day ($)"
            value={formData.price}
            onChange={handleChange}
            required
            className="w-full border p-3 rounded-lg"
          />

          {/* Description */}
          <textarea
            name="description"
            placeholder="Car description"
            value={formData.description}
            onChange={handleChange}
            required
            rows="4"
            className="w-full border p-3 rounded-lg"
          />

          {/* Image */}
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="w-full border p-3 rounded-lg"
          />

          {/* Preview */}
          {imageFile && (
            <img
              src={URL.createObjectURL(imageFile)}
              alt="preview"
              className="h-40 rounded-lg object-cover"
            />
          )}

          {/* Submit */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            {loading ? "Uploading..." : "Add Car"}
          </button>
        </form>
      </div>
    </div>
  );
}

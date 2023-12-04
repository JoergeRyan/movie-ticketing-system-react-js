import { axiosInstance } from ".";


export const AddBookings = async (payload) => {
    try {
        const response = await axiosInstance.post("/api/bookings/book-ticket", payload);
        return response.data;
    } catch (error) {
        return error.response;
    }
}


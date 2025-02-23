import axios from "axios";

const BASE_URL = import.meta.env.VITE_BACKEND_BASE_URL;
const token = localStorage.getItem("noteToken");

export const createUser = async (credentials) => {
    try {
        const res = await axios.post(`${BASE_URL}users`, credentials)
        return res.data
    } catch (error) {
        console.log(error)
    }
}
export const loginUser = async (credentials) => {
    try {
        const res = await axios.post(`${BASE_URL}login`, credentials)
        return res.data
    } catch (error) {
        console.log(error)
    }
}

//trying to see if I could update landing page based on note response returned from db
export const getUserNotes = async () => {
    try {
        const res = await axios.get(`${BASE_URL}notes`,  {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
        return res.data.notes
    } catch (error) {
        console.log('Error fetching notes:', error)
    }
}

export const createANewUserNote = async (credentials) => {
    try {
        const res = await axios.post(`${BASE_URL}notes`, credentials, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
        return res.data
    } catch (error) {
        console.log('Error adding new note:', error)
    }
}
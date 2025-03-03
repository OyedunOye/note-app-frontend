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

export const editAnExistingNote = async (noteId, credentials) => {
    try {
        const res = await axios.patch(`${BASE_URL}notes/${noteId}`, credentials, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        return res.data
    } catch (error) {
        console.log("Error editing note:", error)
    }
}

export const deleteAnExistingNote = async(id) => {
    try {
        const res = await axios.delete(`${BASE_URL}notes/${id}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        return res.data
    } catch (error) {
        console.log("Error deleting a note", error)
    }
}

export const getSingleUserNote = async (id) => {
    try {
        const res = await axios.get(`${BASE_URL}notes/${id}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        return res.data
    } catch (error) {
        console.log(`Error retrieving note with id ${id}`, error)
    }
}
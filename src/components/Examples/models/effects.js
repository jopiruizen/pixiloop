import { dispatch } from '../../../store';
import { getUsersAPI, getCompaniesAPI } from '../../../api/users'; 

export async function getUsers() {
    try {
        const data = await getUsersAPI();
        this.setUsers(data.users);
    } catch (error) {
        console.log("");
        console.log("Error#");
        console.log(error);
    } finally {
       
    }
}

export async function getCompanies() {
    try {
        const data = await getCompaniesAPI();
        this.setCompanies(data.companies);
    } catch (error) {
        console.log("");
        console.log("Error#");
        console.log(error);
    } finally {
       
    }
}
import { redirect } from "react-router-dom";
import { deleteItem } from "../helerps";
import { toast } from "react-toastify";

export async function logoutAction() {
    deleteItem({key: "userName"});

    toast.success("Account Deleted")

    return redirect("/dashboard");
}
import { useEffect } from "react";
import { http } from "./http";
import { useAtom } from "jotai";
import { PapersAtom } from "./Atoms/PapersAtom";
import { OrdersAtom } from "./Atoms/OrdersAtom";
import { CustomersAtom } from "./Atoms/CustomerAtom";


export function useInitializeData() {

    const [, setPapers] = useAtom(PapersAtom);
    const [,setOrders]=useAtom(OrdersAtom);
    const [,setCustomers]=useAtom(CustomersAtom);


    useEffect(() => {
        http.api.getAllPapers().then((response) => {
            setPapers(response.data);
        }).catch(e => {
            console.log(e)
        })
        http.api.getAllOrders().then((response) => {
            setOrders(response.data);
        }).catch(e => {
            console.log(e)
        })
        http.api.getAllCustomers().then((response)=> {
            setCustomers(response.data);
            console.log(response)
        }).catch(e=>{
            console.log(e)
        })
    }, [])
}
export default useInitializeData
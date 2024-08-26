import axios from "axios"
import * as React from "react"

export interface ContractLog {
    name: "onAdd" | "onRemove"
    block: {
        hash: string,
        number: string
    }
    transaction: {
        hash: string,
        index: string
    },
    value: {
        name: string,
        timeStamp: string
    }
}

function useCertified() {
    const [loading, setLoading] = React.useState(false);
    const [certifiedData, setCertifiedData] = React.useState<string[]>([]);
    const [certifiedLogData, setCertifiedLogData] = React.useState<ContractLog[]>([])
    
    React.useEffect(() => {
        const abortControllers = [new AbortController(), new AbortController()] as const;
        getCertifiedData(abortControllers);
        return () => {
            abortControllers[0].abort()
            abortControllers[1].abort()
        }
    }, [])

    const getCertifiedData = async (abortControllers?: readonly [AbortController, AbortController]) => {
        setLoading(true)
        try{
            const responses = await Promise.all([
                axios.get<{ data: string[], status: string }>(import.meta.env.VITE_BACKEND_URL+"/certified", { signal: Array.isArray(abortControllers) ? abortControllers[0]?.signal : undefined }),
                axios.get<{ data: ContractLog[], status: string }>(import.meta.env.VITE_BACKEND_URL+"/certifiedLogs", { signal: Array.isArray(abortControllers) ? abortControllers[1]?.signal : undefined })
            ])
            setCertifiedData(responses[0].data.data);
            setCertifiedLogData(responses[1].data.data)
        }catch{ 
            /* empty */
        }
        setLoading(false)
    }

    const deleteCertifiedData = async (index: number) => {
        try{
            await axios.delete(`${import.meta.env.VITE_BACKEND_URL}/certified/${index}`);
            getCertifiedData();
        }catch{ 
            /* empty */
        }
    }

    const createCertifiedData = async (name: string, lastname: string) => {
        try{
            await axios.post(import.meta.env.VITE_BACKEND_URL+"/certified/", {
                name,
                lastname
            });
            getCertifiedData();
        }catch{ 
            /* empty */
        }
    }

    return { deleteCertifiedData, createCertifiedData, certifiedData, certifiedLogData, loading };
}

export default useCertified;
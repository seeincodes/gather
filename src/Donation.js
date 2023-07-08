import React, { useState, useEffect } from 'react';
import { Configuration, EndaomentSdkApi } from "@endaoment/sdk";

export default function Donation() {
    const [orgs, setOrgs] = useState([]);

    const apiConfig = new Configuration({ network: "goerli" });
    const api = new EndaomentSdkApi(apiConfig);

    useEffect(() => {
        const fetchOrgs = async () => {
            const fetchedOrgs = await api.getDeployedOrgs();
            setOrgs(fetchedOrgs);
        };

        fetchOrgs();
    }, []);

    return (
        <div>
            <h2>Donation</h2>
            <select>
                {orgs.map((org, index) => (
                    <option key={index} value={org}>
                        {org.name}
                    </option>
                ))}
            </select>
        </div>
    );
}

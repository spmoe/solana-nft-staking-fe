"use client";
import React, { useState } from "react";

const secureRPC =
  "https://mainnet.helius-rpc.com/?api-key=77c4b6ae-9a3f-4bea-8db8-c05b1c943999";

export default function Holders() {
  const [isLoading, setIsLoading] = useState(false);
  const [holdres, setHolders] = useState([]);

  const fetchCreatorArrayCollection = async () => {
    setIsLoading(true);
    let page = 1;
    let mintList = [];
    let holderList = [];
    const creatorAddress = "HE3dZ5QMhER8BuzJ8KotoFYh5QcmiXmqab6zcwFhQ3er";
    while (page) {
      const response = await fetch(secureRPC, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          jsonrpc: "2.0",
          id: "my-id",
          method: "getAssetsByCreator",
          params: {
            creatorAddress: creatorAddress,
            onlyVerified: true,
            page: page,
            limit: 1000,
          },
        }),
      });
      const { result } = await response.json();
      for (const nfts of result.items) {
        if (nfts.burnt === false) {
          mintList.push(nfts.id);
          holderList.push(nfts.ownership.owner);
        }
      }
    }

    console.log(holderList);
    setIsLoading(false);
  };
  return (
    <div className="container mx-auto py-[120px]">
      <h1 className="text-4xl py-2">Holders</h1>
      <button
        className="border px-4 py-1 mb-2 bg-black text-white uppercase hover:opacity-80"
        onClick={fetchCreatorArrayCollection}
      >
        {isLoading ? "Loading..." : "Get Holders"}
      </button>
      <div className="">
        <table className="w-full border">
          <thead>
            <tr>
              <th>Address</th>
              <th>SOL Amount</th>
              <th>Token Balances</th>
            </tr>
          </thead>
        </table>
      </div>
    </div>
  );
}

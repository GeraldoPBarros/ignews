/* eslint-disable import/no-anonymous-default-export */
import { NextApiRequest, NextApiResponse } from "next";

export default (request: NextApiRequest, response: NextApiResponse) => {
  const users = [
    { id: 1, name: "Geraldo" },
    { id: 2, name: "José" },
    { id: 3, name: "Mendonça" },
  ];

  return response.json(users);
};

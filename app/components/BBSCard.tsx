import React from "react";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { BBSData } from "../types/types";

interface BBSDataProps {
  bbs: BBSData;
}

const BBSCard = ({ bbs }: BBSDataProps) => {
  const { id, username, title, content, createdAt } = bbs;

  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{username}</CardDescription>
      </CardHeader>
      <CardContent>{content}</CardContent>
      <CardFooter className="flex justify-between">
        <Link className="text-blue-500" href={`/bbs-posts/${id}`}>
          Read More
        </Link>
      </CardFooter>
    </Card>
  );
};

export default BBSCard;

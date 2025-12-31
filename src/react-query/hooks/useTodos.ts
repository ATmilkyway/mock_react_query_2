import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { CASHE_KEY_TODOS } from "../constants";
import APIClient from "../services/apiClient";

export interface Todo {
  id: number;
  title: string;
  userId: number;
  completed: boolean;
}
const apiClient = new APIClient<Todo>("/todos");

const useTodos = () =>
  useQuery<Todo[], Error>({
    queryKey: CASHE_KEY_TODOS,
    queryFn: apiClient.getAll,
    refetchOnWindowFocus: false,
    staleTime: 1_000 * 1,
    retry: 3,
    gcTime: 300_000,
  });

export default useTodos;

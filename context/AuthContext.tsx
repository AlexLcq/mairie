"use client"

import { createContext } from "react";
import {AuthContextType} from "@/lib/type";

export const AuthContext = createContext<AuthContextType | null>(null);
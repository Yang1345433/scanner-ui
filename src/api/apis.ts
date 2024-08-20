import request from '@/api';
import { HttpClient } from '@/api/http-client';
import {Login} from "@/api/Login.ts";
import {Authority} from "@/api/Authority.ts";
import {Logout} from "@/api/Logout.ts";
import {NationalRailway} from "@/api/NationalRailway.ts";
import {UrbanRail} from "@/api/UrbanRail.ts";
import {Department} from "@/api/Department.ts";

const login = new Login(new HttpClient())
login.http.instance = request

const authority = new Authority(new HttpClient())
authority.http.instance = request

const logout = new Logout(new HttpClient())
logout.http.instance = request

const nationalRailway = new NationalRailway(new HttpClient())
nationalRailway.http.instance = request

const urbanRail = new UrbanRail(new HttpClient())
urbanRail.http.instance = request

const department = new Department(new HttpClient())
department.http.instance = request

export const apis = {
    login: login,
    authority: authority,
    logout: logout,
    nationalRailway: nationalRailway,
    urbanRail: urbanRail,
    department: department
};

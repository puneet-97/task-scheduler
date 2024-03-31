import { IAlgorithm } from "../interfaces/general";

export const ALGORITHMS: IAlgorithm[] = [
  { id: 1, name: "First Come First Serve", shortName: "FCFS" },
  { id: 2, name: "Shortest Job First", shortName: "SJF" },
  { id: 3, name: "Longest Job First", shortName: "LJF" },
  { id: 4, name: "Priority Scheduling", shortName: "PS" },
  { id: 5, name: "Round Robin", shortName: "RR" },
];

import { ReactNode } from "react";

export type TAlertType = "alert-error" | "alert-info" | "alert-default" | "alert-warning" | "alert-success"
export interface IProps {
  type:TAlertType,
  icon:ReactNode,
  title:string,
  description:string
}
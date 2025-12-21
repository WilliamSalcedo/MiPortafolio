import * as React from "react"
import { SVGProps } from "react"
const SupabaseIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={2}
    className="icon icon-tabler icons-tabler-outline icon-tabler-brand-supabase"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M4 14h8v7l8-11h-8V3z" />
  </svg>
)
export default SupabaseIcon

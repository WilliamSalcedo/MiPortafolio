import * as React from "react"
import { SVGProps } from "react"
const MongoDbIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={2}
    className="icon icon-tabler icons-tabler-outline icon-tabler-brand-mongodb"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M12 3v19M18 11.227c0 3.273-1.812 4.77-6 9.273-4.188-4.503-6-6-6-9.273C6 6.773 9.071 4.3 12 2c2.929 2.3 6 4.773 6 9.227z" />
  </svg>
)
export default MongoDbIcon

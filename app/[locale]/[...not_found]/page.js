import { notFound } from "next/navigation"

function NotFoundCatchAll() {
    notFound()
  return (
    <div>Not Found</div>
  )
}

export default NotFoundCatchAll
import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div>
        <h1>404</h1>
        <p>Page not found</p>
        <Link to="/">Go back to the main page</Link>
    </div>
  )
}

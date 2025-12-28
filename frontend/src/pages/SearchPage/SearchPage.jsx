import { useSearchParams } from "react-router"
import Gallery from "../../components/Gallery/Gallery"
import "./SearchPage.css"

function SearchPage() {

  let [ searchParams ] = useSearchParams();

  const search = searchParams.get("search");

  return (
    <div>
      <Gallery search={search} />
    </div>
  )
}

export default SearchPage